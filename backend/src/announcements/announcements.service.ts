import { Injectable, NotFoundException } from '@nestjs/common';
import {
  AnnouncementResponseDto,
  CreateAnnouncementDto,
  UpdateAnnouncementDto,
} from './dto';
import { $Enums, User } from '../../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { GeneralOkResponseDto } from '../common/dto';

@Injectable()
export class AnnouncementsService {
  private readonly studentsAnnouncement: $Enums.AnnouncementTargetAudience[] = [
    'parent_student',
    'staff_student',
    'students',
    'whole_school',
  ];
  private readonly staffAnnouncement: $Enums.AnnouncementTargetAudience[] = [
    'parent_staff',
    'staff',
    'staff_student',
    'whole_school',
  ];
  private readonly parentAnnouncement: $Enums.AnnouncementTargetAudience[] = [
    'parent',
    'parent_staff',
    'parent_student',
    'whole_school',
  ];
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createAnnouncementDto: CreateAnnouncementDto,
    user: User,
  ): Promise<AnnouncementResponseDto> {
    const { content, priority, schoolId, targetAudience, title } =
      createAnnouncementDto;
    const school = await this.prisma.school.findUnique({
      where: { id: schoolId, users: { some: { id: user.id } } },
    });
    if (!school) throw new NotFoundException('School not found');
    const announcement = await this.prisma.announcement.create({
      data: {
        content,
        priority,
        title,
        targetAudience,
        school: { connect: { id: school.id } },
      },
    });

    return announcement;
  }

  async findAll(user: User): Promise<AnnouncementResponseDto[]> {
    const announcements = await this.prisma.announcement.findMany({
      where: {
        schoolId: user.schoolId,
        targetAudience: {
          in:
            user.role === 'student'
              ? this.studentsAnnouncement
              : user.role === 'parent'
                ? this.parentAnnouncement
                : user.role === 'teacher' || user.role === 'school_admin'
                  ? this.staffAnnouncement
                  : ['whole_school'],
        },
      },
    });

    if (announcements.length === 0)
      throw new NotFoundException('No announcements yet');

    return announcements;
  }

  async findOne(id: string, user: User): Promise<AnnouncementResponseDto> {
    const announcement = await this.prisma.announcement.findFirst({
      where: {
        id,
        schoolId: user.schoolId,
        targetAudience: {
          in:
            user.role === 'student'
              ? this.studentsAnnouncement
              : user.role === 'parent'
                ? this.parentAnnouncement
                : user.role === 'teacher' || user.role === 'school_admin'
                  ? this.staffAnnouncement
                  : ['whole_school'],
        },
      },
    });
    if (!announcement) throw new NotFoundException('Announcement not found');
    return announcement;
  }

  async update(
    id: string,
    updateAnnouncementDto: UpdateAnnouncementDto,
    user: User,
  ) {
    const { content, priority, targetAudience, title } = updateAnnouncementDto;
    const announcement = await this.prisma.announcement.findFirst({
      where: {
        id,
        schoolId: user.schoolId,
        targetAudience: {
          in:
            user.role === 'student'
              ? this.studentsAnnouncement
              : user.role === 'parent'
                ? this.parentAnnouncement
                : user.role === 'teacher' || user.role === 'school_admin'
                  ? this.staffAnnouncement
                  : ['whole_school'],
        },
      },
    });
    if (!announcement) throw new NotFoundException('Announcement not found');
    return await this.prisma.announcement.update({
      where: { id },
      data: { content, priority, targetAudience, title },
    });
  }

  async remove(id: string, user: User): Promise<GeneralOkResponseDto> {
    const announcement = await this.prisma.announcement.findFirst({
      where: {
        id,
        schoolId: user.schoolId,
        targetAudience: {
          in:
            user.role === 'student'
              ? this.studentsAnnouncement
              : user.role === 'parent'
                ? this.parentAnnouncement
                : user.role === 'teacher' || user.role === 'school_admin'
                  ? this.staffAnnouncement
                  : ['whole_school'],
        },
      },
    });
    if (!announcement) throw new NotFoundException('Announcement not found');

    await this.prisma.announcement.delete({ where: { id } });

    return { messages: 'Announcement deleted successfully' };
  }
}
