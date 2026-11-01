export default function ward() {
    const wards = [
        {
            name: "Oluwaseun Chukwu David",
            class: "jss 2 Gold",
            Gender: "Male",
            Age: "DOB 14 apr 2011",
            BloodGroup: "O+",
            Genotype: "AA",
        },
        {
            name: "Chioma Eze Miracle",
            class: "SSS1 science",
            Gender: "Female",
            Age: "DOB 14 apr 2011",
            BloodGroup: "O+",
            Genotype: "AA",
        }
    ]
    return (
        <div className="p-10">
            <h1 className="text-2xl font-semibold">Registered Children & Wards</h1>
            <p className="text-zinc-500">
                Academic Profile, class placement information, and enrollment records for your children.
            </p>
        </div>
    )
}