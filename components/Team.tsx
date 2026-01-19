import Image from 'next/image';

import type { SiteContent } from '@/content/siteContent';

type TeamProps = {
  content: SiteContent['team'];
};

export default function Team({ content }: TeamProps) {
  const teamMembers = content.members;

  return (
    <section id="team" className="py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
            {content.subtitle}
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-slate-900/70 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all transform hover:scale-105"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-900/30 to-slate-800">
                {member.image && (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: member.objectPosition ?? '50% 50%' }}
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
