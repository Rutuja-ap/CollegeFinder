import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.deleteMany();

  await prisma.college.createMany({
    data: [
      {
        name: "IIT Bombay",
        location: "Mumbai",
        fees: 220000,
        rating: 4.8,
        overview: "Top engineering institute in India.",
        placements: "Average package 25 LPA",
        image:
          "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
      },
      {
        name: "IIT Delhi",
        location: "Delhi",
        fees: 230000,
        rating: 4.9,
        overview: "Leading IIT with strong placements.",
        placements: "Average package 28 LPA",
        image:
          "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg",
      },
      {
        name: "COEP",
        location: "Pune",
        fees: 95000,
        rating: 4.6,
        overview: "Historic engineering college.",
        placements: "Average package 10 LPA",
        image:
          "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg",
      },
      {
        name: "VJTI",
        location: "Mumbai",
        fees: 85000,
        rating: 4.5,
        overview: "Premier Maharashtra engineering college.",
        placements: "Average package 12 LPA",
        image:
          "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
      },
      {
        name: "BITS Pilani",
        location: "Rajasthan",
        fees: 450000,
        rating: 4.7,
        overview: "Top private engineering institute.",
        placements: "Average package 22 LPA",
        image:
          "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
      },
      {
        name: "NIT Trichy",
        location: "Tamil Nadu",
        fees: 170000,
        rating: 4.6,
        overview: "Best NIT in India.",
        placements: "Average package 15 LPA",
        image:
          "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg",
      },
      {
        name: "MIT Pune",
        location: "Pune",
        fees: 300000,
        rating: 4.2,
        overview: "Popular private engineering college.",
        placements: "Average package 8 LPA",
        image:
          "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg",
      },
      {
        name: "IIIT Hyderabad",
        location: "Hyderabad",
        fees: 350000,
        rating: 4.8,
        overview: "Top coding-focused institute.",
        placements: "Average package 30 LPA",
        image:
          "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
      },
      {
        name: "SRM University",
        location: "Chennai",
        fees: 250000,
        rating: 4.1,
        overview: "Large private university.",
        placements: "Average package 7 LPA",
        image:
          "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg",
      },
    ],
  });

  console.log("Seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });