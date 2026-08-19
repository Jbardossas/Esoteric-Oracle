import React, { useState } from 'react';
import { 
  Sparkles, Volume2, VolumeX, Copy, RotateCcw, ArrowRight, 
  Eye, Moon, Zap, Sun, Star, Wind, Flame, Droplets, 
  Mountain, Compass, Anchor, Key, Lock, Shield, Sword, 
  Feather, Hourglass, Infinity, Cloud, Waves, Leaf, Circle, Hexagon
} from 'lucide-react';

// --- Expanded Oracle Knowledge Base ---
const ORACLE_DECK = [
  {
    id: 'celestial-eye',
    name: 'The Celestial Eye',
    theme: 'Clarity & Unveiled Truths',
    symbol: Eye,
    imagery: 'A glowing iris suspended in an endless nebula, shedding light on hidden pathways.',
    insights: [
      'An illusion you have been holding onto is beginning to fracture.',
      'True vision requires stepping back from immediate emotional reactions.',
      'The path forward is illuminated only when you are willing to see things as they are.'
    ],
    takeaway: 'Pause before making your next decision. Write down what you know to be factual versus what you fear might happen.',
    question: 'What truth have you been avoiding out of comfort?'
  },
  {
    id: 'void-weaver',
    name: 'The Void Weaver',
    theme: 'Patience & The Fertile Unknown',
    symbol: Moon,
    imagery: 'Silver threads spinning out of complete darkness, forming a delicate, cosmic web.',
    insights: [
      'Empty space is not a lack of progress; it is the canvas for creation.',
      'Forcing a resolution now will entangle the threads of your intention.',
      'There is power in resting within the liminal space between what was and what will be.'
    ],
    takeaway: 'Allow yourself a period of deliberate non-action. Let the situation breathe and organize itself before you intervene.',
    question: 'How can you find peace in not knowing the immediate outcome?'
  },
  {
    id: 'golden-thread',
    name: 'The Golden Thread',
    theme: 'Synchronicity & Connection',
    symbol: Zap,
    imagery: 'A single, brilliantly illuminated golden strand weaving through shattered fragments of stone.',
    insights: [
      'Seemingly random events are aligning to guide you toward your designated coordinate.',
      'A connection you previously overlooked holds the key to your current friction.',
      'Trust the sudden sparks of intuition; they are the thread pulling you forward.'
    ],
    takeaway: 'Reach out to someone who has unexpectedly crossed your mind today, or revisit an old idea that suddenly feels relevant.',
    question: 'Where are you resisting the natural flow of your life?'
  },
  {
    id: 'solar-forge',
    name: 'The Solar Forge',
    theme: 'Transformation & Crucible',
    symbol: Sun,
    imagery: 'A blinding crucible of starlight melting down iron chains into liquid gold.',
    insights: [
      'The heat you are experiencing is not destroying you; it is refining you.',
      'Old identities must be burned away to make room for your next iteration.',
      'Friction is the required catalyst for this specific manifestation.'
    ],
    takeaway: 'Stop fighting the discomfort. Identify one habit you can let go of today that no longer serves your growth.',
    question: 'What part of yourself are you desperately trying to save from the fire?'
  },
  {
    id: 'astral-compass',
    name: 'The Astral Compass',
    theme: 'Direction & Inner Knowing',
    symbol: Compass,
    imagery: 'A floating brass instrument where the needle points inward toward the observer.',
    insights: [
      'External advice is drowning out your internal navigation system.',
      'The "logical" choice may be in direct opposition to your authentic alignment.',
      'You already know the answer; you are just waiting for permission to act on it.'
    ],
    takeaway: 'Cancel one external consultation or advice-seeking session today. Sit quietly for ten minutes and ask yourself the question instead.',
    question: 'Whose permission are you waiting for?'
  },
  {
    id: 'obsidian-anchor',
    name: 'The Obsidian Anchor',
    theme: 'Grounding & Reality',
    symbol: Anchor,
    imagery: 'A massive, dark glass anchor embedded deep within the bedrock of a glowing core.',
    insights: [
      'Your mind is drifting too far into future anxieties or past regrets.',
      'You cannot build a stable structure on the shifting sands of "what if".',
      'Physical embodiment is required to process the current energetic load.'
    ],
    takeaway: 'Do something strictly physical today: walk barefoot on grass, lift heavy objects, or cook a meal from scratch.',
    question: 'How are you escaping your present physical reality?'
  },
  {
    id: 'crystalline-key',
    name: 'The Crystalline Key',
    theme: 'Access & Breakthrough',
    symbol: Key,
    imagery: 'A translucent, humming key turning in an invisible lock suspended in mid-air.',
    insights: [
      'A door you thought was permanently sealed is preparing to open.',
      'The barrier in front of you requires a shift in perspective, not more force.',
      'You now have the necessary clearance to access the next level of your journey.'
    ],
    takeaway: 'Revisit a problem you abandoned months ago. The missing piece you needed is now in your possession.',
    question: 'What old assumption is acting as a locked door in your mind?'
  },
  {
    id: 'aetheric-shield',
    name: 'The Aetheric Shield',
    theme: 'Boundaries & Protection',
    symbol: Shield,
    imagery: 'A hexagonal grid of violet light deflecting shadows back into the void.',
    insights: [
      'Your energy is leaking into environments or relationships that do not replenish you.',
      'Saying "no" is an act of preservation, not an act of hostility.',
      'You are absorbing frequencies that do not belong to you.'
    ],
    takeaway: 'Audit your current commitments. Cancel or decline one obligation this week that feels draining rather than expansive.',
    question: 'Where are you sacrificing your peace to keep someone else comfortable?'
  },
  {
    id: 'severed-knot',
    name: 'The Severed Knot',
    theme: 'Release & Finality',
    symbol: Sword,
    imagery: 'A glowing blade cleanly slicing through an impossibly tangled mass of dark roots.',
    insights: [
      'Negotiation with this specific obstacle is no longer viable.',
      'A clean break is required to restore your operational baseline.',
      'Prolonging the ending only amplifies the collateral damage.'
    ],
    takeaway: 'Identify a situation where you are endlessly compromising. Make a definitive, non-negotiable decision to cut it off.',
    question: 'What are you holding onto simply because you are used to the weight?'
  },
  {
    id: 'falling-feather',
    name: 'The Falling Feather',
    theme: 'Surrender & Grace',
    symbol: Feather,
    imagery: 'A single, luminescent feather drifting slowly downward against a turbulent storm.',
    insights: [
      'You are expending too much energy trying to control variables beyond your reach.',
      'Gravity will do the work if you stop flapping your wings in a panic.',
      'Softness is a valid and powerful response to harsh conditions.'
    ],
    takeaway: 'When you feel the urge to micromanage a situation today, consciously take a step back and let it unfold naturally.',
    question: 'Where are you gripping the steering wheel too tightly?'
  },
  {
    id: 'shifting-sands',
    name: 'The Shifting Sands',
    theme: 'Time & Impermanence',
    symbol: Hourglass,
    imagery: 'An hourglass where the sand flows upwards, defying gravity and logic.',
    insights: [
      'Your perception of being "too late" or "behind schedule" is an artificial construct.',
      'The current phase is temporary; do not build a permanent monument to a passing mood.',
      'Time is bending to accommodate your actual needs, not your ego\'s timeline.'
    ],
    takeaway: 'Remove a self-imposed deadline that is causing you unnecessary stress. Reassess the timeline based on reality, not pressure.',
    question: 'What would you do right now if you believed you had all the time in the world?'
  },
  {
    id: 'ouroboros-ring',
    name: 'The Ouroboros Ring',
    theme: 'Cycles & Repetition',
    symbol: Infinity,
    imagery: 'A serpent made of starlight consuming its own tail, creating a perpetual energy loop.',
    insights: [
      'You have arrived at this exact lesson before, wearing different circumstances.',
      'The cycle will repeat until the fundamental behavioral pattern is altered.',
      'Endings and beginnings are happening simultaneously right now.'
    ],
    takeaway: 'Identify the recurring theme in your current frustration. Choose one completely different reaction to break the loop.',
    question: 'How is this situation a mirror of something you experienced years ago?'
  },
  {
    id: 'nebula-cloud',
    name: 'The Nebula Cloud',
    theme: 'Confusion & Gestation',
    symbol: Cloud,
    imagery: 'A dense, impenetrable cloud of colorful cosmic dust hiding newborn stars.',
    insights: [
      'Clarity is unavailable right now because the components are still forming.',
      'Demanding answers in the midst of the fog will only lead to false conclusions.',
      'Confusion is a necessary phase of profound intellectual or spiritual upgrades.'
    ],
    takeaway: 'Accept the feeling of being lost for the next 24 hours. Do not attempt to "figure it out"; just exist in the mystery.',
    question: 'Can you tolerate being a beginner again?'
  },
  {
    id: 'tidal-force',
    name: 'The Tidal Force',
    theme: 'Emotion & Flow',
    symbol: Waves,
    imagery: 'Massive, slow-moving waves of bioluminescent water pulling back from the shore.',
    insights: [
      'A surge of unprocessed emotion is preparing to make landfall.',
      'Attempting to build walls against the tide will result in structural failure.',
      'You must dive under the wave to avoid taking the full impact on the surface.'
    ],
    takeaway: 'Schedule time to process what you are feeling safely. Write, cry, or speak it out loud without filtering yourself.',
    question: 'What emotion have you categorized as "inconvenient" lately?'
  },
  {
    id: 'emerald-sprout',
    name: 'The Emerald Sprout',
    theme: 'Growth & Vulnerability',
    symbol: Leaf,
    imagery: 'A fragile, bright green shoot pushing its way through solid, cracked concrete.',
    insights: [
      'New beginnings require you to be small and vulnerable for a time.',
      'The environment is harsh, but your internal drive to grow is stronger.',
      'Do not compare your day-one progress to someone else\'s harvest season.'
    ],
    takeaway: 'Acknowledge one small, incremental step you took today. Protect your new ideas from cynical critics until they are established.',
    question: 'Where are you expecting a forest when you only just planted the seed?'
  },
  {
    id: 'whispering-wind',
    name: 'The Whispering Wind',
    theme: 'Communication & Subtlety',
    symbol: Wind,
    imagery: 'Invisible currents bending the tops of ancient, monolithic trees in unison.',
    insights: [
      'The message you need is being delivered quietly; you must lower the noise to hear it.',
      'How you say it is currently more important than what you are saying.',
      'Information is traveling fast behind the scenes.'
    ],
    takeaway: 'Listen more than you speak in your next interaction. Pay attention to body language and the words left unsaid.',
    question: 'What is the subtle whisper you have been ignoring?'
  },
  {
    id: 'twin-flames',
    name: 'The Twin Flames',
    theme: 'Partnership & Mirroring',
    symbol: Flame,
    imagery: 'Two distinct fires burning side-by-side, their heat combining into a single pillar of white light.',
    insights: [
      'Another person is reflecting your own unresolved traits back to you.',
      'True collaboration requires two whole individuals, not two halves seeking completion.',
      'Friction in a partnership is highlighting where you both need to expand.'
    ],
    takeaway: 'Instead of criticizing someone else\'s behavior today, ask yourself where that exact trait exists within your own life.',
    question: 'What does this person trigger in you that you have not yet healed?'
  },
  {
    id: 'deep-well',
    name: 'The Deep Well',
    theme: 'Resources & Reserves',
    symbol: Droplets,
    imagery: 'A dark, stone well echoing with the sound of a single drop of pure, glowing water.',
    insights: [
      'You are operating on auxiliary power; your primary reserves are dangerously low.',
      'You must descend into your depths to locate the source of your true energy.',
      'Superficial fixes will not quench the profound thirst you are experiencing.'
    ],
    takeaway: 'Prioritize deep, restorative rest over superficial entertainment tonight. Go to sleep earlier than usual.',
    question: 'Where are you pouring your energy out faster than you can replenish it?'
  },
  {
    id: 'silent-peak',
    name: 'The Silent Peak',
    theme: 'Perspective & Achievement',
    symbol: Mountain,
    imagery: 'A jagged, snow-capped summit standing entirely above a thick blanket of storm clouds.',
    insights: [
      'You have climbed high enough to see that the previous drama was microscopic.',
      'The air is thinner here; you cannot carry the same baggage you brought from the valley.',
      'Take a moment to recognize the altitude you have achieved before looking for the next mountain.'
    ],
    takeaway: 'Write down three things you have accomplished in the last year that your past self would be amazed by.',
    question: 'Are you so focused on the climb that you forgot to look at the view?'
  },
  {
    id: 'iron-lock',
    name: 'The Iron Lock',
    theme: 'Restriction & Security',
    symbol: Lock,
    imagery: 'A heavy, rusting padlock holding shut the gates to an overgrown, forgotten garden.',
    insights: [
      'What feels like a punishment or restriction is currently keeping you safe.',
      'You are locked out because you are not yet equipped to handle what is inside.',
      'Security can easily become a prison if left unexamined for too long.'
    ],
    takeaway: 'Accept a current limitation or delay as a form of cosmic protection. Stop rattling the doorknob.',
    question: 'How is this perceived rejection actually a redirection?'
  },
  {
    id: 'wandering-star',
    name: 'The Wandering Star',
    theme: 'Individuality & Defiance',
    symbol: Star,
    imagery: 'A solitary blue star moving in retrograde against the synchronized rotation of a golden galaxy.',
    insights: [
      'Your path does not map to the established constellations of your peers.',
      'Deviation from the norm is your specific assignment, not a mistake.',
      'You will be misunderstood; that is the price of authentic trajectory.'
    ],
    takeaway: 'Make a decision today based entirely on your own weird, specific preference, disregarding what is "normal".',
    question: 'Where are you dimming your light to fit into a constellation that isn\'t yours?'
  },
  {
    id: 'perfect-circle',
    name: 'The Perfect Circle',
    theme: 'Wholeness & Integration',
    symbol: Circle,
    imagery: 'A flawless ring of pure white light expanding uniformly into the darkness.',
    insights: [
      'You already possess every component required for the next phase.',
      'Stop searching for the missing piece; the work now is assembling what you have.',
      'Accepting your shadow is what makes the geometry of your soul complete.'
    ],
    takeaway: 'Write down a perceived "flaw" you have. Brainstorm one way that exact trait has actually helped or protected you.',
    question: 'Can you accept yourself exactly as you are in this very second?'
  },
  {
    id: 'quantum-hex',
    name: 'The Quantum Hexagon',
    theme: 'Structure & Manifestation',
    symbol: Hexagon,
    imagery: 'A three-dimensional geometric lattice materializing out of chaotic, swirling dust.',
    insights: [
      'Raw creative energy is useless until it is poured into a rigid structure.',
      'You need better systems, not more inspiration.',
      'Discipline is the grid upon which magic is actually constructed.'
    ],
    takeaway: 'Take 15 minutes today to organize your physical workspace or create a strict schedule for a project you have been putting off.',
    question: 'Where is your lack of structure causing your energy to leak away?'
  }
];

export default function EsotericOracle() {
  const [step, setStep] = useState('menu'); 
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [queryText, setQueryText] = useState('');
  const [drawnCard, setDrawnCard] = useState(null);
  const [copied, setCopied] = useState(false);
  const [hoveredSeal, setHoveredSeal] = useState(null);

  const toggleAudio = () => setAudioEnabled(!audioEnabled);

  const handleDirectQuerySubmit = (e) => {
    e.preventDefault();
    if (!queryText.trim()) return;
    initiateReveal();
  };

  const initiateReveal = () => {
    setStep('revealing');
    const randomCard = ORACLE_DECK[Math.floor(Math.random() * ORACLE_DECK.length)];
    setDrawnCard(randomCard);
    
    setTimeout(() => {
      setStep('result');
    }, 2500);
  };

  const copyToClipboard = () => {
    if (!drawnCard) return;
    const text = `The Esoteric Oracle\n\nDraw: ${drawnCard.name} - ${drawnCard.theme}\n\nInsights:\n- ${drawnCard.insights.join('\n- ')}\n\nTakeaway: ${drawnCard.takeaway}\n\nReflection: ${drawnCard.question}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetOracle = () => {
    setStep('menu');
    setQueryText('');
    setDrawnCard(null);
  };

  const CardSymbol = drawnCard?.symbol || Sparkles;

  return (
    <div className="relative min-h-screen bg-[#0A0B10] text-gray-200 font-sans overflow-hidden flex flex-col items-center justify-center selection:bg-purple-900/50 selection:text-[#D4AF37]">
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[100px] rounded-full opacity-30" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent bg-[length:20px_20px]" />
      </div>

      <header className="absolute top-0 w-full p-6 flex justify-between items-center z-20">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#D4AF37]" />
          <h1 className="font-serif tracking-widest uppercase text-sm font-medium text-gray-400">Esoteric Oracle</h1>
        </div>
        <button 
          onClick={toggleAudio}
          className="p-2 rounded-full hover:bg-white/5 transition-colors text-gray-400 hover:text-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
          aria-label="Toggle ambient sound"
        >
          {audioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>
      </header>

      <main className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center justify-center min-h-[80vh]">
        
        {step === 'menu' && (
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 space-y-12">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl text-white tracking-wide">Seek the Void</h2>
              <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
                Choose your method of communion. Speak your intention directly, or let the aether draw for you.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setStep('query')}
                className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all duration-300 w-64 text-left overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <h3 className="font-serif text-[#D4AF37] text-lg mb-1">Direct Query</h3>
                <p className="text-xs text-gray-400">State your intention in words</p>
              </button>

              <button 
                onClick={() => setStep('draw')}
                className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 w-64 text-left overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <h3 className="font-serif text-purple-300 text-lg mb-1">Intuitive Draw</h3>
                <p className="text-xs text-gray-400">Select from the cosmic seals</p>
              </button>
            </div>
          </div>
        )}

        {step === 'query' && (
          <form onSubmit={handleDirectQuerySubmit} className="w-full max-w-lg animate-in fade-in zoom-in-95 duration-700 space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl text-white mb-2">Speak Your Intention</h2>
              <p className="text-sm text-gray-400">Focus on your friction, question, or desire.</p>
            </div>
            <div className="relative group">
              <input 
                autoFocus
                type="text"
                value={queryText}
                onChange={(e) => setQueryText(e.target.value)}
                placeholder="e.g., Why do I feel stagnant in my work?"
                className="w-full bg-black/50 border border-white/10 focus:border-[#D4AF37] rounded-xl px-6 py-4 text-white placeholder:text-gray-600 outline-none shadow-lg focus:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all duration-300"
              />
            </div>
            <div className="flex justify-between items-center">
              <button type="button" onClick={() => setStep('menu')} className="text-sm text-gray-500 hover:text-white transition-colors">
                Cancel
              </button>
              <button 
                type="submit" 
                disabled={!queryText.trim()}
                className="flex items-center gap-2 px-6 py-2 bg-[#D4AF37] text-black font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300"
              >
                Consult <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {step === 'draw' && (
          <div className="animate-in fade-in zoom-in-95 duration-700 flex flex-col items-center w-full">
            <h2 className="font-serif text-3xl text-white mb-12 text-center">Select a Seal</h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full perspective-[1000px]">
              {[1, 2, 3].map((seal) => (
                <button
                  key={seal}
                  onClick={initiateReveal}
                  onMouseEnter={() => setHoveredSeal(seal)}
                  onMouseLeave={() => setHoveredSeal(null)}
                  className={`relative w-48 h-72 rounded-xl transition-all duration-500 [transform-style:preserve-3d] shadow-xl ${
                    hoveredSeal === seal ? '-translate-y-4 shadow-[0_0_30px_rgba(139,92,246,0.3)]' : 'shadow-black/50'
                  }`}
                >
                  <div className="absolute inset-0 bg-gray-900 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 to-transparent" />
                    <Sparkles className={`w-8 h-8 transition-colors duration-500 ${hoveredSeal === seal ? 'text-[#D4AF37]' : 'text-purple-700/50'}`} />
                    <div className="absolute inset-2 border border-white/5 rounded-lg" />
                  </div>
                </button>
              ))}
            </div>
            <button onClick={() => setStep('menu')} className="mt-12 text-sm text-gray-500 hover:text-white transition-colors">
              Return to Menu
            </button>
          </div>
        )}

        {step === 'revealing' && (
          <div className="flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-500">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 border-t-2 border-[#D4AF37] rounded-full animate-spin duration-1000" />
              <div className="absolute inset-2 border-r-2 border-purple-500 rounded-full animate-spin duration-700 direction-reverse" />
              <Sparkles className="w-8 h-8 text-[#D4AF37] animate-pulse" />
            </div>
            <p className="font-serif text-gray-400 tracking-widest animate-pulse">PIERCING THE VEIL</p>
          </div>
        )}

        {step === 'result' && drawnCard && (
          <div className="w-full flex flex-col lg:flex-row gap-12 items-center lg:items-start animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            <div className="shrink-0 perspective-[1200px] w-64 h-96 group">
              <div className="relative w-full h-full transition-transform duration-1000 ease-out [transform-style:preserve-3d] [transform:rotateY(180deg)]">
                <div className="absolute inset-0 bg-gray-900 border border-white/10 rounded-2xl [backface-visibility:hidden]" />
                
                <div className="absolute inset-0 bg-[#0c0d14] border border-[#D4AF37]/30 rounded-2xl p-6 flex flex-col items-center justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-[0_0_40px_rgba(212,175,55,0.15)] overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="text-xs tracking-widest text-[#D4AF37] uppercase font-medium">Draw</div>
                  
                  <div className="flex flex-col items-center space-y-6">
                    <div className="w-20 h-20 rounded-full bg-black/50 border border-[#D4AF37]/20 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                      <CardSymbol className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <div className="text-center space-y-2">
                      <h3 className="font-serif text-2xl text-white">{drawnCard.name}</h3>
                      <p className="text-xs text-purple-300 tracking-wider uppercase">{drawnCard.theme}</p>
                    </div>
                  </div>

                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">Esoteric Oracle</div>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-8 bg-white/5 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
              
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] flex items-center gap-2">
                  <Eye className="w-4 h-4" /> The Vision
                </h4>
                <p className="text-gray-300 italic font-serif leading-relaxed text-lg">
                  "{drawnCard.imagery}"
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-purple-400">Core Insight</h4>
                <ul className="space-y-3">
                  {drawnCard.insights.map((insight, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                      <span className="text-[#D4AF37] block mt-0.5">•</span>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-widest text-gray-500">Practical Takeaway</h4>
                  <p className="text-sm text-gray-200 leading-relaxed">{drawnCard.takeaway}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-widest text-gray-500">Reflection</h4>
                  <p className="text-sm text-white font-medium bg-black/20 p-4 rounded-xl border border-white/5">
                    {drawnCard.question}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-white/5">
                <button 
                  onClick={resetOracle}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-medium transition-colors flex justify-center items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" /> Draw Again
                </button>
                <button 
                  onClick={copyToClipboard}
                  className="flex-1 py-3 border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl text-sm font-medium transition-colors flex justify-center items-center gap-2"
                >
                  {copied ? 'Copied!' : <><Copy className="w-4 h-4" /> Copy Reading</>}
                </button>
              </div>

            </div>
          </div>
        )}
      </main>
    </div>
  );
}