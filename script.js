feather.replace();

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburgerMenu = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Data materi edukasi ADHD pada orang dewasa
const courses = [
  {
    image: "assets/materi-1.svg",
    category: "Dasar-Dasar",
    title: "Mengenal ADHD pada Orang Dewasa",
    description: "Pelajari apa itu ADHD, gejala umum pada orang dewasa, dan mengapa banyak kasus baru terdiagnosis di usia dewasa.",
    mentor: "Andini Putri, M.Psi., Psikolog",
    price: "Gratis",
    slug: "mengenal-adhd-dewasa",
  },
  {
    image: "assets/materi-2.svg",
    category: "Produktivitas",
    title: "Strategi Manajemen Waktu & Fokus",
    description: "Teknik praktis mengatur waktu, mengurangi prokrastinasi, dan menjaga fokus di tengah kesibukan sehari-hari.",
    mentor: "Bimo Prakoso, M.Psi., Psikolog",
    price: "Rp 49.000",
    slug: "manajemen-waktu-fokus",
  },
  {
    image: "assets/materi-3.svg",
    category: "Relasi",
    title: "ADHD dan Hubungan Sosial",
    description: "Memahami dampak ADHD terhadap hubungan pertemanan, keluarga, dan pekerjaan, serta cara berkomunikasi yang lebih efektif.",
    mentor: "Salsabila Rahma, M.Psi., Psikolog",
    price: "Rp 49.000",
    slug: "adhd-hubungan-sosial",
  },
  {
    image: "assets/materi-4.svg",
    category: "Regulasi Emosi",
    title: "Mengelola Emosi & Impulsivitas",
    description: "Belajar mengenali pemicu emosi, teknik regulasi diri, dan cara merespons impulsivitas dengan lebih tenang.",
    mentor: "Raka Firmansyah, M.Psi., Psikolog",
    price: "Rp 59.000",
    slug: "emosi-impulsivitas",
  },
];

function displayCourses(courses) {
  const courseList = document.querySelector("#course-list");

  courseList.innerHTML = "";

  courses.forEach((course) => {
    courseList.innerHTML += `
    <div class="menu-card">
        <img src="${course.image}" alt="${course.title}">
        <div class="menu-card-content">
            <span>${course.category}</span>
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <small>Narasumber: ${course.mentor}</small>
            <strong>${course.price}</strong>
            <a href="course.html?slug=${course.slug}">
            Lihat Materi
            </a>
        </div>
    </div>
    `;
  });
}

displayCourses(courses);
