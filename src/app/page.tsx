"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiArrowUpRight, HiEnvelope, HiMapPin } from "react-icons/hi2";

interface Product {
  name: string;
  detail: string;
  notes: string;
  image: string;
}

const imageBase = "https://images.unsplash.com";
const whatsappNumber = "6289650427923";
const whatsappInquiryUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Halo, saya ingin bertanya tentang Bolu Ketan Hitam Bogor.",
)}`;
const images = {
  hero: "/bolu-hero.png",
  sliced: "/boluketanhitam-1.png",
  family: "/boluketanhitam-5.png",
  gift: "/pirt1.png",
  coffee: "/review.png",
  gathering: `${imageBase}/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85`,
};

const products: Product[] = [
  { name: "Reguler", detail: "Ukuran 23 x 11,5 cm", notes: "Lumer, Original, Keju, Almond", image: "/bolu-reguler.jpg" },
  { name: "Small", detail: "Ukuran 20 x 7,5 cm", notes: "Lumer, Original, Keju, Almond", image: "/bolu-small.jpg" },
  { name: "Bolu Ketan Hitam Lumer", detail: "Best Seller", notes: "Tekstur lembut dengan sensasi lumer yang kaya rasa di setiap gigitan.", image: "/bolu-lumer.jpg" },
  { name: "Varian Custom (Birthday Cake)", detail: "Khusus Order H-2 & Pick Up Mandiri", notes: "Keju-Almond, Lumer-Keju, Lumer-Almond", image: "/bolu-birthday.jpg" },
];

const navLinks = [
  { label: "Produk", href: "#produk" },
  { label: "Cerita Kami", href: "#cerita" },
  { label: "Testimonial", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

const trustPoints = [
  {
    title: "200+ Review",
    text: "200+ Review Bintang 5 di Google. Ini adalah bukti cerita mereka yang sudah mencoba, puas, dan kembali order lagi karena rasanya benar-benar sesuai harapan.",
    image: images.coffee,
  },
  {
    title: "2.500+ Box",
    text: "Terjual Lebih dari 2.500+ Box. Ribuan box sudah sampai ke meja keluarga, menemani sore yang dingin, jadi kejutan ulang tahun, hingga hampers untuk orang tersayang.",
    image: "/boluketanhitam-13.png",
  },
  {
    title: "Halal MUI",
    text: "Bersertifikat Halal MUI. Telah bersertifikat halal resmi dari MUI dengan ID 32410022479760525, diproduksi dengan standar halal yang jelas dan terjamin.",
    image: "/boluketanhitam-14.png",
  },
  {
    title: "Terdaftar PIRT",
    text: "Terdaftar PIRT Dinas Kesehatan. Diproduksi secara higienis, kami telah terdaftar dengan nomor P-IRT 8053271011479-30 dan memenuhi standar yang berlaku.",
    image: "/pirt-serti.png",
  },
];

const moments = [
  { title: "Kumpul keluarga", image: "/boluketanhitam-6.png" },
  { title: "Oleh-oleh dari Bogor", image: "/boluketanhitam-8.png" },
  { title: "Teman berbagi cerita", image: "/boluketanhitam-9.png" },
  { title: "Hadiah yang berkesan", image: "/boluketanhitam-7.png" },
];

function ImageFrame({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      quality={85}
      priority={priority}
      className={`object-cover ${className}`}
    />
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenuToggle = () => setMenuOpen((isOpen) => !isOpen);
  const handleMenuClose = () => setMenuOpen(false);
  const headerIsLight = scrolled || menuOpen;

  const headerClassName = [
    "fixed inset-x-0 top-0 z-50 transition-all duration-300",
    headerIsLight
      ? "bg-brand-secondary/95 shadow-[0_8px_30px_rgba(56,34,29,0.08)] backdrop-blur-md"
      : "bg-transparent",
  ].join(" ");
  const desktopLinksClassName = [
    "hidden items-center gap-8 text-base font-semibold md:flex",
    scrolled ? "text-brand-primary" : "text-brand-secondary",
  ].join(" ");
  const menuButtonClassName = [
    "grid h-9 w-9 place-items-center rounded-full border text-base md:hidden sm:h-10 sm:w-10 sm:text-lg",
    headerIsLight
      ? "border-brand-primary/15 text-brand-primary"
      : "border-brand-secondary/20 text-brand-secondary",
  ].join(" ");

  return (
    <header className={headerClassName}>
      <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-4 sm:px-6 sm:py-5 lg:px-10"
        aria-label="Navigasi utama"
      >
        <a
          href="#beranda"
          aria-label="Bolu Ketan Hitam Bogor - Beranda"
          className="relative block h-12 w-28 shrink-0 sm:h-16 sm:w-40"
        >
          <Image
            src="/icon-bolu.png"
            alt="Bolu Ketan Hitam Bogor"
            fill
            sizes="(max-width: 639px) 112px, 160px"
            quality={85}
            className="object-contain object-left"
            priority
          />
        </a>

        <div className={desktopLinksClassName}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-brand-gold px-3 py-2 text-base font-semibold text-brand-primary transition hover:scale-105 hover:bg-[#e0b17f] active:scale-95 sm:px-5 sm:py-2.5"
          >
            Pesan Sekarang
          </a>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label="Buka menu navigasi"
            onClick={handleMenuToggle}
            className={menuButtonClassName}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-brand-primary/10 px-6 pb-5 pt-2 md:hidden">
          <div className="flex flex-col gap-4 text-base font-semibold text-brand-primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleMenuClose}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative isolate overflow-hidden bg-brand-burgundy text-brand-secondary"
    >
      <div className="mx-auto grid min-h-[700px] max-w-7xl items-center gap-8 px-4 pb-24 pt-28 sm:gap-12 sm:px-6 sm:pb-28 sm:pt-36 lg:min-h-[760px] lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:pb-40 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-xl"
        >
          <p className="mb-6 font-script text-2xl text-brand-secondary">
            Dibuat dengan hati, dari Bogor
          </p>
          <h1 className="font-serif text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[5.35rem]">
            Cita rasa otentik<span className="text-brand-secondary">...</span>
            <br />
            <span className="text-brand-secondary">Bikin nagih</span> dari gigitan pertama.
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-brand-secondary">
            Bolu ketan hitam yang lembut, legit, dan selalu berhasil menghangatkan
            suasana. Resep rumahan, rasa yang tak terlupakan.
          </p>
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex max-w-full items-center gap-2 whitespace-nowrap rounded-full bg-brand-secondary px-4 py-3 text-base font-semibold text-brand-primary transition hover:scale-105 hover:bg-white active:scale-95 sm:mt-9 sm:gap-3 sm:px-6 sm:py-3.5"
          >
            <FaWhatsapp className="text-lg text-[#25D366]" />
            Hubungi Kami Sekarang
            <HiArrowUpRight />
          </a>
          <div className="mt-10 flex items-center gap-3 text-base leading-relaxed text-brand-secondary sm:mt-12 sm:gap-4">
            <span className="h-px w-8 shrink-0 bg-brand-secondary sm:w-10" />
            Dipanggang segar setiap hari
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto h-[300px] w-full max-w-[570px] sm:h-[390px] lg:h-[590px]"
        >
          <div className="absolute inset-8 rotate-3 rounded-[45%] bg-brand-gold/15 blur-sm" />
          <div className="absolute inset-0 overflow-hidden rounded-[45%_45%_20%_20%] shadow-2xl shadow-black/30">
            <ImageFrame
              src="/boluketanhitam-12.png"
              alt="Potongan bolu ketan hitam dengan taburan kelapa"
              priority
            />
          </div>
          <div className="absolute -bottom-3 left-2 rounded-2xl border border-brand-secondary/30 bg-brand-primary px-3 py-3 backdrop-blur-md sm:-left-3 sm:px-5 sm:py-4">
            <div className="flex items-center gap-2">
              <p className="font-serif text-2xl leading-none text-brand-secondary">5/5</p>
              <span
                className="text-sm tracking-[0.16em] text-brand-secondary"
                aria-label="5 dari 5 bintang"
              >
                ★★★★★
              </span>
            </div>
            <p className="mt-2 border-t border-brand-secondary/30 pt-2 text-[11px] uppercase leading-tight tracking-[0.16em] text-brand-secondary">
              dari pelanggan kami
            </p>
          </div>
        </motion.div>
      </div>
      <div className="absolute -bottom-1 left-0 h-20 w-full rounded-[50%_50%_0_0/100%_100%_0_0] bg-brand-secondary" />
    </section>
  );
}

function IntroSection() {
  return (
    <section id="cerita" className="bg-brand-secondary px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-16 lg:grid-cols-2">
        <div>
          <p className="font-script text-xl text-brand-primary">Dari Resep Keluarga</p>
          <h2 className="section-title mt-4">Untuk Momen yang Lebih Bermakna</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-primary">
            Bukan sekadar soal rasa, tapi tentang kasih sayang, kehangatan, dan nostalgia masa kecil yang ingin kami bagikan kembali di setiap gigitan.
          </p>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-brand-primary">
            Kami tidak hanya ingin berbisnis. Kami ingin UMKM rumahan ini terus bertumbuh, naik kelas, dan bisa ikut memutar roda ekonomi serta membuka lapangan pekerjaan bagi lebih banyak orang.
          </p>
        </div>

        <div className="relative mx-auto h-[320px] w-full max-w-md sm:h-[420px]">
          <div className="absolute inset-5 rounded-[2rem] bg-[#f1dfc8]" />
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-xl">
            <ImageFrame
              src={images.sliced}
              alt="Bolu ketan hitam disajikan di atas meja"
            />
          </div>
          <p className="absolute -bottom-5 right-0 rounded-full bg-brand-burgundy px-3 py-2 text-base font-script text-brand-secondary shadow-lg sm:-right-3 sm:px-5 sm:py-3 sm:text-lg">
            a little joy, everyday
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustCard({
  text,
  image,
  index,
}: {
  text: string;
  image: string;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08 }}
      className="overflow-hidden rounded-2xl bg-brand-secondary shadow-[0_12px_30px_rgba(56,34,29,0.06)]"
    >
      <div className="relative h-36">
        <ImageFrame src={image} alt={text} />
      </div>
    </motion.article>
  );
}

function TrustSection() {
  return (
    <section className="bg-[#f5eee5] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
          <div>
            <p className="eyebrow">Kenapa kami</p>
            <h2 className="section-title mt-3">Dibuat untuk dipercaya.</h2>
          </div>
          <span className="hidden font-script text-2xl text-brand-burgundy sm:block">
            good things take time
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((trust, index) => (
            <TrustCard key={trust.title} {...trust} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductItem({ product }: { product: Product }) {
  const orderMessage = `Halo, saya ingin memesan ${product.name} (${product.detail}).`;
  const orderUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;
  const isBestSeller = product.detail === "Best Seller";
  const cardClassName = [
    "grid gap-4 py-6 sm:gap-6 sm:py-7 md:grid-cols-[180px_1fr_auto] md:items-center",
    isBestSeller
      ? "my-3 rounded-2xl border-2 border-brand-gold bg-brand-gold/10 px-4 shadow-[0_12px_30px_rgba(212,163,115,0.24)] sm:px-5"
      : "",
  ].join(" ");

  return (
    <article className={cardClassName}>
      <div className="relative h-32 overflow-hidden rounded-2xl sm:h-36">
        <ImageFrame src={product.image} alt={product.name} />
      </div>
      <div>
        {isBestSeller && (
          <span className="mb-2 inline-flex rounded-full bg-brand-gold px-3 py-1 text-sm font-semibold text-brand-primary">
            Best Seller
          </span>
        )}
        <h3 className="font-serif text-3xl font-bold text-brand-primary">{product.name}</h3>
        <p className="mt-1 text-base font-semibold leading-relaxed text-brand-burgundy">{product.detail}</p>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-brand-primary">
          {product.notes}
        </p>
      </div>
      <a
        href={orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-primary px-4 py-2.5 text-base font-semibold text-brand-secondary transition hover:scale-105 hover:bg-brand-burgundy active:scale-95 sm:px-5 sm:py-3"
      >
        Pesan
        <HiArrowUpRight />
      </a>
    </article>
  );
}

function ProductSection() {
  return (
    <section id="produk" className="bg-brand-secondary px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl">
          <p className="eyebrow">Pilih favoritmu</p>
          <h2 className="section-title mt-3">Produk unggulan kami.</h2>
        </div>
        <div className="mt-8 divide-y divide-brand-primary/10 sm:mt-12">
          {products.map((product) => (
            <ProductItem key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OccasionCard({
  title,
  image,
  index,
}: {
  title: string;
  image: string;
  index: number;
}) {
  const cardClassName = [
    "relative h-64 overflow-hidden rounded-2xl sm:h-96",
    index % 2 ? "sm:mt-8" : "",
  ].join(" ");

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={cardClassName}
    >
      <ImageFrame src={image} alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/85 via-transparent to-transparent" />
      <h3 className="absolute bottom-5 left-5 right-4 font-serif text-2xl font-bold sm:text-3xl">
        {title}
      </h3>
    </motion.article>
  );
}

function OccasionSection() {
  return (
    <section className="bg-brand-primary px-4 py-16 text-brand-secondary sm:px-6 sm:py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-start gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-0">
          <div>
            <p className="eyebrow !text-brand-secondary">Lebih dari sekadar kue</p>
            <h2 className="section-title mt-3 text-brand-secondary">
              Cocok untuk berbagai
              <br className="hidden sm:block" /> momen spesial.
            </h2>
          </div>
          <span className="font-script text-base text-brand-gold sm:text-xl">share the sweetness</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {moments.map((moment, index) => (
            <OccasionCard key={moment.title} {...moment} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % 5);
    }, 5000);

    return () => window.clearInterval(slideTimer);
  }, []);

  return (
    <section id="testimoni" className="bg-brand-secondary px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title text-brand-primary">Apa Kata Mereka?</h2>
        <div className="relative mx-auto mt-10 max-w-5xl overflow-hidden px-1 pb-4">
          <motion.div
            className="flex"
            animate={{ x: `${-activeSlide * 100}%` }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {Array.from({ length: 5 }, (_, slideIndex) => (
              <div
                key={`testimoni-slide-${slideIndex + 1}`}
                className="grid min-w-full grid-cols-1 gap-6 px-2 md:grid-cols-2 md:gap-8"
              >
                {[0, 1].map((offset) => {
                  const imageIndex = (slideIndex + offset) % 5;

                  return (
                    <div
                      key={`testimoni-${imageIndex + 1}`}
                      className={`relative min-w-0 ${offset === 1 ? "hidden md:block" : ""}`}
                    >
                      <Image
                        src={`/testimoni-${imageIndex + 1}.png`}
                        alt={`Testimoni pelanggan ${imageIndex + 1} Bolu Ketan Hitam Bogor`}
                        width={501}
                        height={626}
                        quality={85}
                        className="h-auto w-full rounded-2xl shadow-lg"
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-brand-secondary/20 to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-brand-secondary/20 to-transparent sm:w-16" />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const contactDetails = [
    { icon: HiMapPin, label: "Jl. Sukasari III No.14, RT.03/RW.006, Sukasari, Kec. Bogor Tim.,Kota Bogor, Jawa Barat 16142" },
    { icon: FaWhatsapp, label: "0896-5042-7923" },
    { icon: HiEnvelope, label: "boluketanhitambogor@gmail.com" },
    { icon: FaInstagram, label: "@boluketanhitambogor" },
  ];

  return (
    <section id="kontak" className="bg-brand-secondary px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="eyebrow">Mari berbagi rasa</p>
          <h2 className="section-title mt-3">
            Sapa kami,
            <br />kami siap membantu.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-brand-primary sm:mt-9">
            {contactDetails.map(({ icon: Icon, label }) => (
              <p key={label} className="flex items-center gap-4">
                <Icon className="text-xl text-brand-burgundy" />
                {label}
              </p>
            ))}
          </div>
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-brand-burgundy px-6 py-3.5 text-base font-semibold text-brand-secondary transition hover:scale-105 active:scale-95"
          >
            <FaWhatsapp className="text-lg" />
            Chat WhatsApp
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border-4 border-[#f5eee5] shadow-xl sm:rounded-3xl sm:border-8">
          <iframe 
            title="Peta Lokasi Bolu Ketan Hitam Bogor"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.234041744593!2d106.81346957591833!3d-6.617819964694512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c51ec0f2b31d%3A0x6b99330e8b743d62!2sBolu%20Ketan%20Hitam%20Bogor%20-%20Bolu%20Jadul!5e0!3m2!1sid!2sid!4v1789280200088!5m2!1sid!2sid" 
            className="w-full h-64 md:h-80 lg:h-96 rounded-2xl shadow-sm grayscale-[20%] contrast-125"
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <TrustSection />
      <ProductSection />
      <OccasionSection />
      <TestimonialSection />
      <ContactSection />
      <footer className="bg-brand-primary px-6 py-8 text-center text-base leading-relaxed text-brand-secondary">
        © 2024 Bolu Ketan Hitam Bogor. Dibuat dengan rasa.
      </footer>
    </main>
  );
}
