type FooterProps = {
  line1: string;
  line2?: string;
};

export default function Footer({ line1, line2 }: FooterProps) {
  return (
    <footer className="mt-24 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
        <p className="text-xs text-gray-500">
          {line1}
        </p>
        {line2 && (
          <p className="text-xs text-gray-600">
            {line2}
          </p>
        )}
      </div>
    </footer>
  );
}
