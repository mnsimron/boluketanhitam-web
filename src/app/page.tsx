"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiArrowUpRight, HiCheck, HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";

interface Product {
  name: string;
  detail: string;
  notes: string;
  image: string;
}

interface Testimonial {
  initials: string;
  name: string;
  time: string;
  quote: string;
}

const imageBase = "https://images.unsplash.com";
const images = {
  hero: "/boluketanhitam-4.png",
  sliced: "/boluketanhitam-1.png",
  family: "/boluketanhitam-5.png",
  gift: "/pirt1.png",
  coffee: "/review.png",
  gathering: `${imageBase}/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85`,
};

const products: Product[] = [
  { name: "Bolu Reguler", detail: "20 × 20 cm · 8–10 potong", notes: "Lembut, legit, dengan wangi santan yang hangat.", image: images.sliced },
  { name: "Bolu Small", detail: "15 × 15 cm · 4–6 potong", notes: "Ukuran manis untuk teman ngopi atau oleh-oleh.", image: "/boluketanhitam-11.png" },
  { name: "Bolu Custom", detail: "Sesuai pesanan · Mulai 10 box", notes: "Kemasan personal untuk hari yang ingin dikenang.", image: "/boluketanhitam-10.png" },
];

const testimonials: Testimonial[] = [
  { initials: "NS", name: "Nadia S.", time: "2 hari lalu", quote: "Teksturnya lembut banget dan rasa ketan hitamnya benar-benar terasa. Satu box habis di kantor!" },
  { initials: "AR", name: "Ari R.", time: "1 minggu lalu", quote: "Packaging-nya cantik, aman sampai Jakarta. Cocok sekali buat oleh-oleh dari Bogor." },
  { initials: "DM", name: "Dinda M.", time: "2 minggu lalu", quote: "Pesan custom untuk ulang tahun, hasilnya manis dan rapi. Timnya juga cepat membantu." },
  { initials: "FK", name: "Fajar K.", time: "3 minggu lalu", quote: "Rasa rumahan premium. Tidak terlalu manis, jadi enak dimakan bersama kopi." },
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
    text: "Dipercaya dan disukai pelanggan",
    image: images.coffee,
  },
  {
    title: "2.500+ Box",
    text: "Menemani berbagai momen",
    image: images.family,
  },
  {
    title: "Halal MUI",
    text: "Tenang menikmatinya",
    image: images.sliced,
  },
  {
    title: "Terdaftar PIRT",
    text: "Standar mutu yang terjaga",
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
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
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
    "hidden items-center gap-8 text-sm font-semibold md:flex",
    scrolled ? "text-brand-primary/75" : "text-brand-secondary/80",
  ].join(" ");
  const menuButtonClassName = [
    "grid h-10 w-10 place-items-center rounded-full border text-lg md:hidden",
    headerIsLight
      ? "border-brand-primary/15 text-brand-primary"
      : "border-brand-secondary/20 text-brand-secondary",
  ].join(" ");

  return (
    <header className={headerClassName}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
        aria-label="Navigasi utama"
      >
        <a
          href="#beranda"
          aria-label="Bolu Ketan Hitam Bogor - Beranda"
          className="relative block h-16 w-40 shrink-0"
        >
          <Image
            src="/icon-bolu.png"
            alt="Bolu Ketan Hitam Bogor"
            fill
            sizes="200px"
            className="object-contain object-left"
            priority
          />
        </a>

        <div className={desktopLinksClassName}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#kontak"
            className="rounded-full bg-brand-gold px-5 py-2.5 text-xs font-bold text-brand-primary transition hover:scale-105 hover:bg-[#e0b17f] active:scale-95"
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
          <div className="flex flex-col gap-4 text-sm font-semibold text-brand-primary/75">
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
      className="relative isolate overflow-hidden bg-brand-primary text-brand-secondary"
    >
      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-6 pb-28 pt-36 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:pb-40 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-xl"
        >
          <p className="mb-6 font-script text-2xl text-brand-gold">
            Dibuat dengan hati, dari Bogor
          </p>
          <h1 className="font-serif text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[5.35rem]">
            Cita rasa otentik<span className="text-brand-gold">...</span>
            <br />
            <span className="text-brand-gold">Bikin nagih</span> dari gigitan pertama.
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-brand-secondary/70">
            Bolu ketan hitam yang lembut, legit, dan selalu berhasil menghangatkan
            suasana. Resep rumahan, rasa yang tak terlupakan.
          </p>
          <a
            href="#kontak"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-brand-secondary px-6 py-3.5 text-sm font-bold text-brand-primary transition hover:scale-105 hover:bg-white active:scale-95"
          >
            <FaWhatsapp className="text-lg text-[#25D366]" />
            Hubungi Kami Sekarang
            <HiArrowUpRight />
          </a>
          <div className="mt-12 flex items-center gap-4 text-xs text-brand-secondary/55">
            <span className="h-px w-10 bg-brand-gold" />
            Dipanggang segar setiap hari
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto h-[390px] w-full max-w-[570px] sm:h-[500px] lg:h-[590px]"
        >
          <div className="absolute inset-8 rotate-3 rounded-[45%] bg-brand-gold/15 blur-sm" />
          <div className="absolute inset-0 overflow-hidden rounded-[45%_45%_20%_20%] shadow-2xl shadow-black/30">
            <ImageFrame
              src="/boluketanhitam-12.png"
              alt="Potongan bolu ketan hitam dengan taburan kelapa"
            />
          </div>
          <div className="absolute -bottom-3 -left-3 rounded-2xl border border-brand-secondary/15 bg-brand-primary/80 px-5 py-4 backdrop-blur-md">
            <p className="font-serif text-2xl text-brand-gold">4.9/5</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-brand-secondary/60">
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
  const highlights = [
    "Resep Jadul turun-temurun",
    "Bahan pilihan tanpa pengawet",
    "Dipersiapkan fresh sesuai pesanan",
  ];

  return (
    <section id="cerita" className="bg-brand-secondary px-6 py-20 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Tentang Bolu</p>
          <h2 className="section-title mt-4">Untuk momen yang lebih bermakna.</h2>
          <p className="mt-6 max-w-lg leading-7 text-brand-primary/65">
            Kami percaya, kue yang baik bukan hanya soal rasa. Ia hadir di tengah
            percakapan, dikirim sebagai tanda sayang, dan menjadi bagian kecil dari
            cerita yang besar.
          </p>
          <ul className="mt-8 space-y-4 text-sm font-semibold text-brand-primary/80">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-gold/20 text-brand-burgundy">
                  <HiCheck />
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-md">
          <div className="absolute inset-5 rounded-[2rem] bg-[#f1dfc8]" />
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-xl">
            <ImageFrame
              src={images.sliced}
              alt="Bolu ketan hitam disajikan di atas meja"
            />
          </div>
          <p className="absolute -bottom-5 -right-3 rounded-full bg-brand-burgundy px-5 py-3 font-script text-lg text-brand-secondary shadow-lg">
            a little joy, everyday
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustCard({
  title,
  text,
  image,
  index,
}: {
  title: string;
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
        <ImageFrame src={image} alt="" />
        <div className="absolute inset-0" />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-bold text-brand-primary">{title}</h3>
        <p className="mt-1 text-sm text-brand-primary/55">{text}</p>
      </div>
    </motion.article>
  );
}

function TrustSection() {
  return (
    <section className="bg-[#f5eee5] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Kenapa kami</p>
            <h2 className="section-title mt-3">Dibuat untuk dipercaya.</h2>
          </div>
          <span className="hidden font-script text-xl text-brand-burgundy sm:block">
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
  return (
    <article className="grid gap-6 py-7 md:grid-cols-[180px_1fr_auto] md:items-center">
      <div className="relative h-36 overflow-hidden rounded-2xl">
        <ImageFrame src={product.image} alt={product.name} />
      </div>
      <div>
        <h3 className="font-serif text-2xl font-bold text-brand-primary">{product.name}</h3>
        <p className="mt-1 text-sm font-semibold text-brand-burgundy">{product.detail}</p>
        <p className="mt-3 max-w-lg text-sm leading-6 text-brand-primary/55">
          {product.notes}
        </p>
      </div>
      <a
        href="#kontak"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-bold text-brand-secondary transition hover:scale-105 hover:bg-brand-burgundy active:scale-95"
      >
        Pesan
        <HiArrowUpRight />
      </a>
    </article>
  );
}

function ProductSection() {
  return (
    <section id="produk" className="bg-brand-secondary px-6 py-20 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl">
          <p className="eyebrow">Pilih favoritmu</p>
          <h2 className="section-title mt-3">Produk unggulan kami.</h2>
        </div>
        <div className="mt-12 divide-y divide-brand-primary/10">
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
    "relative h-72 overflow-hidden rounded-2xl sm:h-96",
    index % 2 ? "mt-8" : "",
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
      <h3 className="absolute bottom-5 left-5 right-4 font-serif text-xl font-bold sm:text-2xl">
        {title}
      </h3>
    </motion.article>
  );
}

function OccasionSection() {
  return (
    <section className="bg-brand-primary px-6 py-20 text-brand-secondary lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="eyebrow text-brand-gold">Lebih dari sekadar kue</p>
            <h2 className="section-title mt-3 text-brand-secondary">
              Cocok untuk berbagai
              <br className="hidden sm:block" /> momen spesial.
            </h2>
          </div>
          <span className="font-script text-xl text-brand-gold">share the sweetness</span>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {moments.map((moment, index) => (
            <OccasionCard key={moment.title} {...moment} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="w-[320px] rounded-2xl bg-brand-secondary p-6 shadow-[0_12px_30px_rgba(56,34,29,0.06)] sm:w-[380px]">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-burgundy font-serif font-bold text-brand-secondary">
            {testimonial.initials}
          </span>
          <div>
            <h3 className="text-sm font-bold text-brand-primary">{testimonial.name}</h3>
            <p className="text-xs text-brand-primary/45">{testimonial.time}</p>
          </div>
        </div>
        <span className="text-brand-gold" aria-label="5 dari 5 bintang">
          ★★★★★
        </span>
      </div>
      <p className="mt-6 font-serif text-lg leading-7 text-brand-primary/80">
        “{testimonial.quote}”
      </p>
    </article>
  );
}

function TestimonialMarquee() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimoni" className="overflow-hidden bg-[#f5eee5] px-0 py-20 lg:py-28">
      <div className="mx-auto mb-10 max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">Kata mereka</p>
        <h2 className="section-title mt-3">Rasa yang tinggal di hati.</h2>
      </div>
      <motion.div
        className="flex w-max gap-5 pl-6"
        animate={{ x: [0, -((360 + 20) * testimonials.length)] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </motion.div>
    </section>
  );
}

function ContactSection() {
  const contactDetails = [
    { icon: HiMapPin, label: "Jl. Pajajaran No. 12, Bogor" },
    { icon: HiPhone, label: "+62 896 5042 7923" },
    { icon: HiEnvelope, label: "halo@boluketanhitam.id" },
    { icon: FaInstagram, label: "@boluketanhitambogor" },
  ];

  return (
    <section id="kontak" className="bg-brand-secondary px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="eyebrow">Mari berbagi rasa</p>
          <h2 className="section-title mt-3">
            Sapa kami,
            <br />kami siap membantu.
          </h2>
          <div className="mt-9 space-y-5 text-sm text-brand-primary/70">
            {contactDetails.map(({ icon: Icon, label }) => (
              <p key={label} className="flex items-center gap-4">
                <Icon className="text-xl text-brand-burgundy" />
                {label}
              </p>
            ))}
          </div>
          <a
            href="https://wa.me/6281234567890"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-brand-burgundy px-6 py-3.5 text-sm font-bold text-brand-secondary transition hover:scale-105 active:scale-95"
          >
            <FaWhatsapp className="text-lg" />
            Chat WhatsApp
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border-8 border-[#f5eee5] shadow-xl">
          <iframe
            title="Lokasi Bolu Ketan Hitam Bogor"
            src="https://www.google.com/maps?q=Bogor%20Jawa%20Barat&output=embed"
            className="h-[360px] w-full grayscale-[0.35]"
            loading="lazy"
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
      <TestimonialMarquee />
      <ContactSection />
      <footer className="bg-brand-primary px-6 py-8 text-center text-xs text-brand-secondary/50">
        © 2024 Bolu Ketan Hitam Bogor. Dibuat dengan rasa.
      </footer>
    </main>
  );
}
