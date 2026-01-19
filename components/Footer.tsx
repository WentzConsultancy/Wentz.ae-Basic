import Image from 'next/image';

type FooterProps = {
  poweredBy: string;
};

export default function Footer({ poweredBy }: FooterProps) {
  return (
    <footer className="mt-24 border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
          {poweredBy}
        </p>
        <div className="relative h-10 w-40">
          <Image
            src="/synapsis-logo.png"
            alt="Synapsis IT"
            fill
            className="object-contain"
            sizes="160px"
          />
        </div>
      </div>
    </footer>
  );
}
