import React, { useState } from "react";

const doctors = [
  {
    name: "Dr. Priyam",
    specialty: "Gynecologist",
    clinic: "Women's Health Clinic - Pune",
    experience: "11 years Experience",
    timings: "Tue, Thu, Sat, 2 PM - 5 PM",
    rating: 4.9,
    image: "https://avekshahospital.com/wp-content/uploads/2023/12/Dr.-Sandesh-O-1280-X-949.jpg",
  },
  {
    name: "Dr. Yash",
    specialty: "Neurology",
    clinic: "Brain Health Clinic - Kolkata",
    experience: "8 years Experience",
    timings: "Mon-Fri, 3 PM - 6 PM",
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqa2gzEi5QWdbEk9W1kk0BhJ8w0wNVqP3TA&s",
  },
  {
    name: "Dr. Arjun",
    specialty: "General Medicine",
    clinic: "Sunshine Health Clinic - Chennai",
    experience: "8 years Experience",
    timings: "Mon-Fri, 10 AM - 6 PM",
    rating: 4.8,
    image: "https://www.shutterstock.com/image-photo/closeup-headshot-portrait-friendly-cheerful-260nw-652787833.jpg",
  },
  {
    name: "Dr. Arjun",
    specialty: "General Medicine",
    clinic: "Sunshine Health Clinic - Chennai",
    experience: "8 years Experience",
    timings: "Mon-Fri, 10 AM - 6 PM",
    rating: 4.8,
    image: "https://www.shutterstock.com/image-photo/closeup-headshot-portrait-friendly-cheerful-260nw-652787833.jpg",
  },
  {
    name: "Dr. Arjun",
    specialty: "General Medicine",
    clinic: "Sunshine Health Clinic - Chennai",
    experience: "8 years Experience",
    timings: "Mon-Fri, 10 AM - 6 PM",
    rating: 4.8,
    image: "https://www.shutterstock.com/image-photo/closeup-headshot-portrait-friendly-cheerful-260nw-652787833.jpg",
  },
  {
    name: "Dr. Arjun",
    specialty: "General Medicine",
    clinic: "Sunshine Health Clinic - Chennai",
    experience: "8 years Experience",
    timings: "Mon-Fri, 10 AM - 6 PM",
    rating: 4.8,
    image: "https://www.shutterstock.com/image-photo/closeup-headshot-portrait-friendly-cheerful-260nw-652787833.jpg",
  },
  {
    name: "Dr. Arjun",
    specialty: "General Medicine",
    clinic: "Sunshine Health Clinic - Chennai",
    experience: "8 years Experience",
    timings: "Mon-Fri, 10 AM - 6 PM",
    rating: 4.8,
    image: "https://www.shutterstock.com/image-photo/closeup-headshot-portrait-friendly-cheerful-260nw-652787833.jpg",
  },
];

const clinics = [
  {
    name: "Sunshine Health Clinic",
    location: "Connaught Place, Delhi",
    timings: "Mon-Sat, 9 AM - 7 PM",
    rating: 4.9,
    reviews: 256,
    image: "https://content3.jdmagicbox.com/v2/comp/bangalore/c8/080pxx80.xx80.230915135142.i2c8/catalogue/dr-youth-clinic-kammanahalli-bangalore-skin-care-clinics-xdllgc6qj7.jpg",
  },
  {
    name: "Little Hearts Clinic",
    location: "Bandra West, Mumbai",
    timings: "Mon-Sun, 10 AM - 8 PM",
    rating: 4.5,
    reviews: 189,
    image: "https://www.korusgroup.com/wp-content/uploads/2023/02/private-clinic-design-build-aspect-ratio-1440-810.jpg",
  },
  {
    name: "Heal Well Clinic",
    location: "Indiranagar, Bangalore",
    timings: "Mon-Sat, 8 AM - 5 PM",
    rating: 4.8,
    reviews: 256,
    image: "https://media.istockphoto.com/id/1496720417/photo/high-five-for-being-such-a-brave-little-boy.jpg?s=612x612&w=0&k=20&c=jrhbbPCEEN5Z3nSmTdu6fBC84v0kFuuJ8L4l2reghn4=",
  },
  {
    name: "Little Hearts Clinic",
    location: "Bandra West, Mumbai",
    timings: "Mon-Sun, 10 AM - 8 PM",
    rating: 4.5,
    reviews: 189,
    image: "https://www.korusgroup.com/wp-content/uploads/2023/02/private-clinic-design-build-aspect-ratio-1440-810.jpg",
  },
  {
    name: "Little Hearts Clinic",
    location: "Bandra West, Mumbai",
    timings: "Mon-Sun, 10 AM - 8 PM",
    rating: 4.5,
    reviews: 189,
    image: "https://www.korusgroup.com/wp-content/uploads/2023/02/private-clinic-design-build-aspect-ratio-1440-810.jpg",
  },
  {
    name: "Little Hearts Clinic",
    location: "Bandra West, Mumbai",
    timings: "Mon-Sun, 10 AM - 8 PM",
    rating: 4.5,
    reviews: 189,
    image: "https://www.korusgroup.com/wp-content/uploads/2023/02/private-clinic-design-build-aspect-ratio-1440-810.jpg",
  },
  {
    name: "Little Hearts Clinic",
    location: "Bandra West, Mumbai",
    timings: "Mon-Sun, 10 AM - 8 PM",
    rating: 4.5,
    reviews: 189,
    image: "https://www.korusgroup.com/wp-content/uploads/2023/02/private-clinic-design-build-aspect-ratio-1440-810.jpg",
  },
  {
    name: "Little Hearts Clinic",
    location: "Bandra West, Mumbai",
    timings: "Mon-Sun, 10 AM - 8 PM",
    rating: 4.5,
    reviews: 189,
    image: "https://www.korusgroup.com/wp-content/uploads/2023/02/private-clinic-design-build-aspect-ratio-1440-810.jpg",
  },
];

const Doctors = () => {
  const [activeTab, setActiveTab] = useState("Doctor");
  const data = activeTab === "Doctor" ? doctors : clinics;

  return (

    <div className="max-w-5xl mx-auto p-4">
      {/* Tab Navigation */}
      {/* sticky z-10 top-20 */}
      <div className="flex space-x-4 border-b ">
        <button
          className={`pb-2 text-lg ${activeTab === "Doctor" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
            }`}
          onClick={() => setActiveTab("Doctor")}
        >
          Doctor
        </button>
        <button
          className={`pb-2 text-lg ${activeTab === "Clinic" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
            }`}
          onClick={() => setActiveTab("Clinic")}
        >
          Clinic
        </button>
      </div>

      {/* Search Bar */}
      <div className="overflow-hidden flex  min-h-0 flex-col">

        <div className="relative my-4 overflow-hidden">
          <input
            type="text"
            placeholder={activeTab === "Doctor" ? "Search by doctor's name, location, specialization" : "Search by hospital's name, location"}
            className="w-full p-2 pl-10 border rounded-lg"
          />
          <span className="absolute left-3 top-3 text-gray-400">🔍</span>
        </div>

        {/* Listings */}
        <div className={`grid gap-4 ${activeTab === "Doctor" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
          {data.map((item, index) => (
            <div key={index} className="bg-blue-100 p-4 rounded-lg shadow-md">
              {activeTab === "Doctor" ? (
                // Doctor Layout (Image and Details Side by Side)
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-md border-2"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name} ({item.specialty})</h3>
                    <p className="text-sm text-gray-500">{item.clinic}</p>
                    <p className="text-sm text-gray-500">{item.experience}</p>
                    <p className="text-sm text-gray-500">{item.timings}</p>
                    <p className="text-yellow-500 font-bold">⭐ {item.rating}</p>
                  </div>
                </div>
              ) : (
                // Clinic Layout (Image on Top, Details Below)
                <>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 sm:w-96 object-cover rounded-md border-2"
                  />
                  <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                  <p className="text-gray-600">{item.location}</p>
                  <p className="text-sm text-gray-500">{item.timings}</p>
                  <p className="text-yellow-500 font-bold mt-2">⭐ {item.rating}</p>
                  <p className="text-sm text-gray-500">({item.reviews} reviews)</p>
                </>
              )}
            </div>
          ))}
        </div>

      </div>

    </div>

  );
};

export default Doctors;
