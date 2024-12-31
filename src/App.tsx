import { Code2, GitBranch, Sparkles, ChevronRight } from 'lucide-react';

const paths = [
  { name: 'Frontend', icon: Code2, color: 'text-cyan-400' },
  { name: 'Backend', icon: GitBranch, color: 'text-b lue-400' },
  { name: 'DevOps', icon: Sparkles, color: 'text-purple-400' }
];

function HeroTagline() {
  return (
    <div className="flex items-center justify-center space-x-2 mb-6">
      <Sparkles className="w-5 h-5 text-cyan-400" />
      <p className="text-cyan-400 font-medium tracking-wide text-sm">
        EMPOWERING DEVELOPERS TO LEVEL UP FASTER
      </p>
    </div>
  );
}

function HeroHeading() {
  return (
    <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
      Build Your Personalized
      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text"> Developer Roadmap </span>
      in Minutes!
    </h1>
  );
}

function HeroButton() {
  return (
    <button className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25">
      Generate My Roadmap
      <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}

function RoadmapCards() {
  return (
    <div className="mt-16 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent h-[200px] bottom-0 z-10"></div>
      <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
        {paths.map(({ name, icon: Icon, color }, index) => (
          <div 
            key={name} 
            className={`p-6 rounded-lg bg-[#1e293b]/50 backdrop-blur-sm border border-[#334155] transform hover:-translate-y-1 transition-all duration-200 ${
              index === 1 ? 'translate-y-8' : ''
            }`}
          >
            <div className="flex flex-col items-center space-y-4">
              <Icon className={`w-8 h-8 ${color}`} />
              <h3 className="text-lg font-semibold text-white">{name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Grid Background Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTAgMmg2ME0wIDRoNjBNMCA2aDYwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iLjIiIG9wYWNpdHk9Ii4xIi8+PC9zdmc+')] opacity-20"></div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-32 sm:pb-28">
        <HeroTagline />
        
        <div className="text-center space-y-8">
          <HeroHeading />
          
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Take the guesswork out of learning. Get a clear, step-by-step path tailored to your skills and career aspirations.
          </p>

          <div className="flex justify-center">
            <HeroButton />
          </div>

          <RoadmapCards />
        </div>
      </div>
    </div>
  );
}

export default App;