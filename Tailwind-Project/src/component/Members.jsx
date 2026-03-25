import React from 'react'

export default function Members() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setTeam(data.results));
  }, []);

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Meet Our Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-5 text-center hover:shadow-xl transition"
            >
              <img
                src={member.picture.large}
                alt="member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-800">
                {member.name.first} {member.name.last}
              </h3>

              <p className="text-gray-500 text-sm">
                {member.email}
              </p>

              <p className="text-gray-400 text-xs mt-2">
                {member.location.country}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
