export default function ward() {
  const wards = [
    {
      name: "Oluwaseun Chukwu David",
      class: "JSS 2 Gold",
      adm: "ARA/2023/043",
      Gender: "Male",
      Age: "DOB 14 apr 2011",
      BloodGroup: "O+",
      Genotype: "AA",
      status: "active"
    },
    {
      name: "Chioma Eze Miracle",
      class: "SSS1 science",
      adm: "ARA/2023/044",
      Gender: "Female",
      Age: "DOB 14 apr 2011",
      BloodGroup: "O+",
      Genotype: "AA",
      status: "active"
    },
  ];
  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold">Registered Children & Wards</h1>
      <p className="text-zinc-500">
        Academic Profile, class placement information, and enrollment records
        for your children.
      </p>
      <div className="grid grid-cols-2 gap-2">
        {wards.map((ward, index) => (
          <div className="border rounded-md" key={index}>
            <div className="bg-[#f2f2f2]">
              <div className="p-5 flex gap-2">
                <div className="p-3 px-4 rounded-full bg-black text-white ">
                  O
                </div>
                <div className="flex justify-between w-full items-center">
                  <div className="">
                    <p>{ward.name}</p>
                    <p className="text-sm text-zinc-500">{ward.adm}</p>
                  </div>
                  <span className="bg-green-800 text-green-100 text-xs font-medium px-2.5 py-0.5 rounded">
                    {ward.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 grid grid-cols-3 gap-2 ">
                <div className="">
                    <p className="text-[12px] text-zinc-500">Classroom arm:</p>
                    <p className="font-semibold text-[13px]">{ward.class}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
