function showLoadingPage() {
    const loadingPage = document.querySelector(".loading-page");
    loadingPage.style.display = "flex"; // Tampilkan loading page dengan layout flex untuk full layar

    // Progres Percentage
    const progress = document.getElementById('progress');
    const percentage = document.getElementById('percentage');
    const mainContent = document.querySelectorAll('.main-content');

    let progressValue = 0;
    const loadingDuration = 3000; // Durasi total loading page dalam milidetik (3 detik)
    const intervalDuration = loadingDuration / 100; // Setiap step interval untuk mencapai 100% dalam durasi 3 detik

    let loadingInterval = setInterval(() => {
        if (progressValue < 100) {
            progressValue += 1;
            progress.style.width = progressValue + '%';
            percentage.innerText = progressValue + '%';
        } else {
            clearInterval(loadingInterval);

            // Animasi slideUp pada loading page
            loadingPage.style.animation = 'slideUp 1s forwards';

            // Setelah slideUp selesai, sembunyikan loading page dan tampilkan halaman home
            setTimeout(() => {
                loadingPage.style.display = 'none'; // Sembunyikan loading page
                mainContent.forEach(section => {
                    section.style.display = 'block'; // Tampilkan konten utama
                    section.style.animation = 'slideUp 1s forwards'; // Animasi slide up untuk konten utama
                });

                // Scroll ke posisi paling atas setelah animasi loading selesai
                setTimeout(() => {
                    window.scrollTo(0, 0); // Scroll ke posisi paling atas (top 0, left 0)
                }, 100); // Tambah sedikit delay untuk sinkronisasi

            }, 1000); // Durasi animasi slideUp (1 detik)
        }
    }, intervalDuration); // Set interval berdasarkan durasi total
}

// Tampilkan animasi loading page saat halaman di-refresh
window.addEventListener("load", function () {
    showLoadingPage();
});
// END LOADING PAGE

// Fungsi Klik Navbar
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Mencegah perilaku default

        // Scroll ke bagian yang dituju
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

    // Ambil semua link navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let currentSection = "";

    // Cek setiap section di halaman
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Jika posisi scroll berada di dalam section, simpan id-nya
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    // Hapus kelas aktif dari semua link navbar
    navLinks.forEach(link => {
        link.classList.remove("active");
        // Tambahkan kelas aktif pada link yang sesuai dengan section yang sedang terlihat
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});
//end navbar

//fungsi keybord 1-7
// Event listener untuk menangkap tombol keyboard
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case '1':
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
            break;
        case '2':
            document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
            break;
        case '3':
            document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
            break;
        case '4':
            document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
            break;
        case '5':
            document.getElementById('skill').scrollIntoView({ behavior: 'smooth' });
            break;
        case '6':
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
            break;
        case '7':
            document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
            break;
    }
});
//end fungsi 1-7

//Fungsi Dropdown
function toggleDropdown() {
    var dropdownContent = document.getElementById('dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

    // Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle') && !event.target.matches('.fa-chevron-down')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}
// ENd Dropdown

// Fungsi change language
function changeLanguage(lang) {
    var availableText = document.querySelector('.available-text');
    availableText.classList.add('reanimate'); 
    
    setTimeout(() => {
        if (lang === 'ID') {
            document.getElementById('job-position').innerText = "UI/UX DESIGNER & FRONTEND DEVELOPER";
            document.getElementById('name').innerText = "Halo, \nSaya Jimmy Efendi";
            document.getElementById('about-me').innerText = "Saya dari Indonesia, saya memiliki pengalaman kerja lebih dari 2 tahun di bidang IT dan Design, mari bekerjasama untuk menciptakan desain aplikasi Android, IOS dan Web yang  kreatif, inovatif dan efisien untuk meningkatkan pengalaman pengguna. Selain itu saya juga seorang freelancer. Mari bekerja dengan saya.";
            document.getElementById('whatsapp-button').innerHTML = 'Senang mengobrol di Whatsapp <i class="fab fa-whatsapp"></i>';
            availableText.innerHTML = '<span>Tersedia untuk bekerja</span>'.repeat(2);
            document.getElementById('language-toggle').innerHTML = 'ID <i class="fas fa-chevron-down"></i>';
            document.getElementById('dropdown-content').innerHTML = '<a href="#" onclick="changeLanguage(\'EN\')">EN</a>';
        } else {
            document.getElementById('job-position').innerText = 'UI/UX DESIGNER & FRONTEND DEVELOPER';
            document.getElementById('name').innerText = "Hello, \nI am Jimmy Efendi";
            document.getElementById('about-me').innerText = "I'am from Indonesia, i have more than 2 years of work experience in IT and Design. Let's work together to create creative, innovative and efficient Android, IOS and Web application designs to improve user experience. Besides that I am also a freelancer. Let's work with me.";
            document.getElementById('whatsapp-button').innerHTML = 'Happy to Chat on Whatsapp <i class="fab fa-whatsapp"></i>';
            availableText.innerHTML = '<span>Available for work</span>'.repeat(2);
            document.getElementById('language-toggle').innerHTML = 'EN <i class="fas fa-chevron-down"></i>';
            document.getElementById('dropdown-content').innerHTML = '<a href="#" onclick="changeLanguage(\'ID\')">ID</a>';
        }
        
        availableText.classList.remove('reanimate'); 
    }, 100);
}
//end chage language

//Fungsi Change Hero
const heroImage = document.getElementById('hero-image');
const heroImageHover = document.getElementById('hero-image-hover');

    // Fungsi untuk mengganti gambar
function showHoverImage() {
    heroImage.style.opacity = '0'; // Sembunyikan gambar pertama
    heroImageHover.style.opacity = '1'; // Tampilkan gambar kedua
}

function showNormalImage() {
    heroImage.style.opacity = '1'; // Tampilkan gambar pertama
    heroImageHover.style.opacity = '0'; // Sembunyikan gambar kedua
}

    // Event listener untuk hero image
heroImage.addEventListener('mouseenter', showHoverImage);
heroImage.addEventListener('mouseleave', showNormalImage);
//End Change Hero

// Owlcarousel
$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        center: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        },
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });

    // Target iframe yang memuat video
    var iframes = $('iframe');
    
    // Fungsi untuk menghentikan autoplay
    function stopAutoplay() {
        owl.trigger('stop.owl.autoplay');
    }

    // Fungsi untuk mengaktifkan autoplay
    function startAutoplay() {
        owl.trigger('play.owl.autoplay');
    }

    // Mendengarkan event pada iframe
    $('#video1').on('load', function() {
        const iframe = this;
        const player = new YT.Player(iframe, {
            events: {
                'onStateChange': function(event) {
                    if (event.data === YT.PlayerState.PLAYING) {
                        stopAutoplay(); // Hentikan autoplay saat video diputar
                    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
                        startAutoplay(); // Mulai ulang autoplay saat video dijeda
                    }
                }
            }
        });
    });
});

// Memuat API YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// end owl carousel

// Fungsi untuk mengarahkan pengguna ke WhatsApp //
function goToWhatsApp() {
    window.location.href = "https://wa.me/6285271654890";
}
//end whatsapp
