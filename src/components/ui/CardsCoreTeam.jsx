const teamMembers = [
  {
    name: "Adil Ali Khan",
    role: "PRESIDENT",
    email: "nikunjbihari99@gmail.com",
    phone: "+91-7093610819",
    image:
      "https://res.cloudinary.com/dguddaxjl/image/upload/v1740814179/media-uploads/1740814178825-alg742w63d4.png",
    description:
      "In the verdant realms of learning, I, Nikunj, cultivate the fields of academia as an agriculture student, and my heart blossoms with zeal as the President (General Secretary) of Galgotias University.\n\n" +
      "My journey commenced as a humble member, steadily climbing the ladder to become a coordinator, and finally, finding myself honoured to lead as the head and now proudly as the President of our esteemed student council. This path has been a tapestry of challenges and opportunities, weaving invaluable experiences that have nurtured my growth.\n\n" +
      "As the president, I feel immensely privileged to share this transformative journey with my esteemed colleagues and dedicated members. The experience has instilled in me valuable attributes, from discipline to learning from failures and cherishing successes. I aspire to keep learning and wholeheartedly contribute to our university's betterment, fostering a welcoming environment where students can channel their creativity and talents.\n\n" +
      "With an unwavering commitment to our shared mission, let us stand as an integral force, driving our cherished student council's soaring success and holistic development.\n\n" +
      '"In the tapestry of my three transformative years, I unearthed the profound truth: through unwavering toil, the world bows to your will, and destiny cannot resist leading you to the realm where you truly belong." - Nikunj.',
  },
  {
    name: "Nikunj Bihari",
    role: "PRESIDENT",
    email: "nikunjbihari99@gmail.com",
    phone: "+91-7093610819",
    image:
      "https://res.cloudinary.com/dguddaxjl/image/upload/v1740814179/media-uploads/1740814178825-alg742w63d4.png",
    description:
      "In the verdant realms of learning, I, Nikunj, cultivate the fields of academia as an agriculture student, and my heart blossoms with zeal as the President (General Secretary) of Galgotias University.\n\n" +
      "My journey commenced as a humble member, steadily climbing the ladder to become a coordinator, and finally, finding myself honoured to lead as the head and now proudly as the President of our esteemed student council. This path has been a tapestry of challenges and opportunities, weaving invaluable experiences that have nurtured my growth.\n\n" +
      "As the president, I feel immensely privileged to share this transformative journey with my esteemed colleagues and dedicated members. The experience has instilled in me valuable attributes, from discipline to learning from failures and cherishing successes. I aspire to keep learning and wholeheartedly contribute to our university's betterment, fostering a welcoming environment where students can channel their creativity and talents.\n\n" +
      "With an unwavering commitment to our shared mission, let us stand as an integral force, driving our cherished student council's soaring success and holistic development.\n\n" +
      '"In the tapestry of my three transformative years, I unearthed the profound truth: through unwavering toil, the world bows to your will, and destiny cannot resist leading you to the realm where you truly belong." - Nikunj.',
  },
  {
    name: "ADITYA PRAKASH",
    role: "VICE - PRESIDENT (CULTURAL)",
    email: "adityaprakash3162@gmail.com",
    phone: "+91-85214 57111",
    image:
      "https://res.cloudinary.com/dguddaxjl/image/upload/v1740814179/media-uploads/1740814178825-alg742w63d4.png",
    description:
      "In the verdant realms of learning, I, Nikunj, cultivate the fields of academia as an agriculture student, and my heart blossoms with zeal as the President (General Secretary) of Galgotias University.\n\n" +
      "My journey commenced as a humble member, steadily climbing the ladder to become a coordinator, and finally, finding myself honoured to lead as the head and now proudly as the President of our esteemed student council. This path has been a tapestry of challenges and opportunities, weaving invaluable experiences that have nurtured my growth.\n\n" +
      "As the president, I feel immensely privileged to share this transformative journey with my esteemed colleagues and dedicated members. The experience has instilled in me valuable attributes, from discipline to learning from failures and cherishing successes. I aspire to keep learning and wholeheartedly contribute to our university's betterment, fostering a welcoming environment where students can channel their creativity and talents.\n\n" +
      "With an unwavering commitment to our shared mission, let us stand as an integral force, driving our cherished student council's soaring success and holistic development.\n\n" +
      '"In the tapestry of my three transformative years, I unearthed the profound truth: through unwavering toil, the world bows to your will, and destiny cannot resist leading you to the realm where you truly belong." - Nikunj.',
  },
];

export default function CardsCoreTeam({ activeTab }) {
  if (activeTab !== "core" || !Array.isArray(teamMembers) || teamMembers.length === 0) return null;

  return (
    <div className="mt-[100vh]">
      {teamMembers.map((member, index) => {
        const isEven = index % 2 === 0;
        const textColor = isEven ? "text-[#CC200E]" : "text-yellow-500";
        const bgColor = isEven ? "bg-[url('/bgyellow.webp')]" : "bg-[url('/bgred.webp')]";

        return (
          <div
            key={member.name}
            className={`flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} 
                        items-center min-h-screen ${bgColor} p-6 w-full bg-cover bg-center bg-no-repeat`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-[90%] md:w-[530px] h-auto max-h-[610px] object-cover rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 p-4 min-h-[500px] flex flex-col justify-center">
              <h2 className={`text-3xl md:text-4xl font-semibold font-poppins tracking-wide uppercase ${textColor}`}>
                {member.name}
              </h2>
              <p className={`text-lg md:text-xl font-montserrat font-medium ${textColor}`}>
                {member.role}
              </p>
              <p className="text-md font-montserrat font-normal text-white">{member.email}</p>
              <p className="text-md font-montserrat font-normal text-white">{member.phone}</p>
              <p className="text-md leading-relaxed font-light font-poppins text-justify mt-4 text-white">
                {member.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
