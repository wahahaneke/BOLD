export default function Roadmap() {
  return (
    <div className="bg-toby-black py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-white font-archivo text-3xl md:text-4xl mb-12">
          ROADMAP
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <div className="bg-toby-darkbg rounded-lg overflow-hidden">
            <div className="relative aspect-square">
              <img
                src="/BOLD/images/6.png"
                alt="BOLD's Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-white font-archivo text-xl mb-3">
                BOLD&apos;s Story
              </h3>
              <div className="mb-4">
                <p className="text-white font-semibold font-montserrat mb-2">
                  BOLD Turtle ($BOLD): a charming character fostering community and positivity!
                </p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-toby-green mr-2">•</span>
                    <span>Made From prompting Chat GPT 4 just like Turbo to catch him on the charts!</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-white font-semibold font-montserrat mb-2">
                  Roadmap for BOLD Turtle ($BOLD)
                </p>
                <div className="mb-3">
                  <h4 className="text-toby-green font-semibold mb-1">Phase 1: Fair Launch</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-toby-green mr-2">•</span>
                      <span>Actions: Launch BOLD Turtle on Pump.fun with burnt liquidity after bond to ensure smooth trading. Build an exciting community atmosphere.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2-3 */}
          <div className="bg-toby-darkbg rounded-lg overflow-hidden">
            <div className="relative aspect-square">
              <img
                src="/BOLD/images/7.png"
                alt="BOLD's Road Map from the Trenches"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-white font-archivo text-xl mb-3">
                BOLD&apos;s Road Map from the Trenches !!
              </h3>

              <div className="mb-4">
                <h4 className="text-toby-green font-semibold mb-1">Phase 2: Community Engagement</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-toby-green mr-2">•</span>
                    <span>Actions: Host lots of mini-competition's to reward early supporters. Announce details on X and Telegram. Use AI for timely communication.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-toby-green font-semibold mb-1">Phase 3: Growth and Partnerships</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-toby-green mr-2">•</span>
                    <span>Actions: Forge partnerships with crypto projects, groups and influencers to boost visibility and expand the $BOLD brand to new markets.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 4-5 */}
          <div className="bg-toby-darkbg rounded-lg overflow-hidden">
            <div className="relative aspect-square">
              <img
                src="/BOLD/images/8.png"
                alt="Road map continued for after pumps"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-white font-archivo text-xl mb-3">
                Road map continued for after pumps !!
              </h3>

              <div className="mb-4">
                <h4 className="text-toby-green font-semibold mb-1">Phase 4: Lending and Staking Platform</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-toby-green mr-2">•</span>
                    <span>Actions: Introduce a community-driven lending and staking platform designed to provide fast, accessible loans for everyday individuals. Detailed information coming soon.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-toby-green font-semibold mb-1">Phase 5: Charitable Commitments and Game Development</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-toby-green mr-2">•</span>
                    <span>Actions: Finalize the development of BOLD's Treasure Hunt, an engaging video game.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
