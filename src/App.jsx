import React, { useState } from 'react';
import { Sparkles, Moon, Sun, Flame, Eye } from 'lucide-react';

const esotericDeck = [
  {
    id: 1,
    emblem: "The Threshold",
    vision: "A shimmering gateway of polished obsidian standing at the edge of a familiar forest, humming with a low, resonant frequency.",
    insights: ["Departure from the known", "Embracing necessary discomfort", "The shedding of old identities"],
    takeaway: "Step forward without looking back; the current friction is the friction of growth.",
    reflection: "What comfortable illusion are you hesitating to leave behind?"
  },
  {
    id: 2,
    emblem: "The Abyss",
    vision: "A starless, subterranean lake perfectly mirroring the darkness above, requiring a quiet leap of faith to cross.",
    insights: ["Confronting shadow aspects", "Surrender to the void", "Ego dissolution"],
    takeaway: "Do not fight the descent. Deep revelation only occurs in the quiet absence of light.",
    reflection: "Where are you expending energy fighting a necessary ending?"
  },
  {
    id: 3,
    emblem: "The Boon",
    vision: "A glowing, crystalline seed resting in the palm of an open hand, radiating a warm, golden pulse.",
    insights: ["Integration of lessons", "Reclaiming lost power", "The gift of earned wisdom"],
    takeaway: "Recognize the strength you have forged in the fire; it is now yours to wield.",
    reflection: "How can you apply your hardest-earned lesson to today's challenge?"
  },
  {
    id: 4,
    emblem: "The Mentor's Flame",
    vision: "A solitary lantern suspended in a misty expanse, casting long, guiding shadows across an invisible path.",
    insights: ["Unexpected guidance", "Trusting inner intuition", "The arrival of synchronous help"],
    takeaway: "Listen to the quiet voice beneath the noise. The teacher appears when the space is cleared.",
    reflection: "Who or what is trying to offer you wisdom that you are currently ignoring?"
  },
  {
    id: 5,
    emblem: "The Refusal",
    vision: "A heavy iron anchor buried deep in dry sand, tethered to a ship that longs for the ocean.",
    insights: ["Stagnation through fear", "Denial of one's calling", "The weight of safety"],
    takeaway: "Delaying the inevitable only amplifies the current of unrest. You cannot unhear the call.",
    reflection: "Where are you playing small to keep others, or yourself, comfortable?"
  },
  {
    id: 6,
    emblem: "The Road of Trials",
    vision: "A winding, fractured staircase ascending a sheer cliff, where each step requires total presence.",
    insights: ["Testing of resolve", "Purification through difficulty", "Sustained focus"],
    takeaway: "The obstacles are not blocking the path; they are the material the path is made of.",
    reflection: "How can you view your current frustration as a necessary refinement?"
  },
  {
    id: 7,
    emblem: "The Atonement",
    vision: "Two vast, celestial spheres slowly overlapping into a perfect eclipse, creating a crown of brilliant light.",
    insights: ["Reconciliation of opposites", "Forgiving the origin", "Meeting the source of power"],
    takeaway: "You must make peace with the forces that shaped you before you can reshape yourself.",
    reflection: "What past conflict must be neutralized for you to step fully into your autonomy?"
  },
  {
    id: 8,
    emblem: "The Two Worlds",
    vision: "A figure standing effortlessly on the surface of deep water, reflecting both the stormy sky and the calm depths.",
    insights: ["Mastery of duality", "Living in the material and spiritual", "Grounded transcendence"],
    takeaway: "You do not need to choose between the sacred and the mundane; breathe them into one reality.",
    reflection: "How can you bring your highest spiritual insights into your daily, physical routines?"
  },
  {
    id: 9,
    emblem: "The Shapeshifter",
    vision: "A mirror made of quicksilver, constantly shifting its surface to reflect different versions of the watcher.",
    insights: ["Adaptability", "Questioning fixed realities", "The illusion of permanence"],
    takeaway: "Do not cling to a rigid definition of who you are. Flow into the form the moment requires.",
    reflection: "What label are you currently wearing that has become too tight for your spirit?"
  },
  {
    id: 10,
    emblem: "The Oracle's Whisper",
    vision: "A single, pure note echoing through a grand, empty canyon, vibrating the very stones.",
    insights: ["A sudden realization", "The clarity of emptiness", "A message from the ether"],
    takeaway: "Silence your active mind. The answer you seek has already been spoken in the spaces between your thoughts.",
    reflection: "If you stopped asking the question, what answer would naturally arise?"
  },
  {
    id: 11,
    emblem: "The Cosmic Loom",
    vision: "Infinite threads of glowing gold weaving themselves into a massive, expanding tapestry in a dark void.",
    insights: ["Interconnectedness", "Trusting the larger pattern", "Fate meeting free will"],
    takeaway: "You are both the weaver and the thread. Your smallest actions are pulling vast realities into existence.",
    reflection: "Where do you need to trust that the chaotic threads of your life are forming a design?"
  },
  {
    id: 12,
    emblem: "The Silent Watcher",
    vision: "A massive, unblinking eye carved into the side of a quiet mountain, ancient and entirely at peace.",
    insights: ["Detachment from drama", "Pure observation", "Releasing the need to control"],
    takeaway: "Step back from the stage. You are not the emotions you feel; you are the awareness observing them.",
    reflection: "What immediate reaction can you replace with calm, neutral observation?"
  },
  {
    id: 13,
    emblem: "The Sovereign Crown",
    vision: "A heavy circlet of forged iron and raw amethyst, resting on an empty, stone throne.",
    insights: ["Radical responsibility", "Owning your authority", "Refusing victimhood"],
    takeaway: "Your power is waiting for you to claim it, but you must stop asking for permission to rule your own realm.",
    reflection: "In what area of your life are you waiting for someone else to save you?"
  },
  {
    id: 14,
    emblem: "The Fractured Vessel",
    vision: "A clay jar cracked down the center, radiating a blinding white light from its broken seams.",
    insights: ["The beauty of imperfection", "Grace entering through wounds", "Vulnerability as strength"],
    takeaway: "Do not hide your fractures. The breaks in your armor are exactly where the highest light enters.",
    reflection: "How can you reframe a perceived flaw into a unique source of spiritual strength?"
  },
  {
    id: 15,
    emblem: "The Eternal Return",
    vision: "A serpent formed of starlight peacefully consuming its own tail, spinning endlessly like a galaxy.",
    insights: ["Cycles of time", "Repeating lessons", "The illusion of endings"],
    takeaway: "You have been here before, and you will be here again. Endings are merely the raw material for beginnings.",
    reflection: "What recurring pattern in your life is asking to finally be mastered?"
  },
  {
    id: 16,
    emblem: "The Alchemist's Crucible",
    vision: "A cast-iron vessel suspended over blue flames, where heavy lead slowly boils into vapor and solidifies into gold.",
    insights: ["The heat of transformation", "Enduring the process", "Refining your essence"],
    takeaway: "The intense pressure you feel is not here to destroy you; it is here to purify you. Stay in the fire.",
    reflection: "What unrefined part of your ego is currently being burned away?"
  },
  {
    id: 17,
    emblem: "The Labyrinth",
    vision: "An ancient, winding maze of high hedges. The path seems to lead away from the center, yet it is the only way in.",
    insights: ["Trusting the indirect route", "Patience with the journey", "The illusion of being lost"],
    takeaway: "You are not off track, even when it feels like you are moving backward. Keep walking the spiral.",
    reflection: "Where are you demanding a straight line in a situation that requires a curved path?"
  },
  {
    id: 18,
    emblem: "The Arid Desert",
    vision: "A vast expanse of white sand under a brilliant, relentless sun. No distractions, no hiding places, only the horizon.",
    insights: ["Isolation for clarity", "Stripping away the excess", "A thirst for true meaning"],
    takeaway: "Embrace the emptiness. This dry spell is starving the distractions so your true desires can speak.",
    reflection: "What is this period of isolation or stillness trying to show you about yourself?"
  },
  {
    id: 19,
    emblem: "The Hidden Oasis",
    vision: "A sudden burst of emerald palms and cool, clear water springing from the center of barren earth.",
    insights: ["Unexpected grace", "Nourishment for the weary", "Recognizing small miracles"],
    takeaway: "Drink deeply of the respite you have been given. Rest is a necessary phase of the great work.",
    reflection: "How can you better receive the grace and support that is being offered to you right now?"
  },
  {
    id: 20,
    emblem: "The Chariot of Fire",
    vision: "A gleaming chariot pulled by two contrasting beasts—one of shadow, one of light—moving in perfect, unified momentum.",
    insights: ["Harnessing opposing forces", "Directed willpower", "Overcoming internal division"],
    takeaway: "Stop fighting your contradictions. Command them to pull you forward toward your singular goal.",
    reflection: "Where is your energy being drained by inner conflict, and how can you unite your focus?"
  },
  {
    id: 21,
    emblem: "The Sunken City",
    vision: "Grand, ruined architecture lying peacefully at the bottom of a clear ocean, holding the secrets of a forgotten era.",
    insights: ["Exploring the subconscious", "Reclaiming repressed memories", "The depth of the psyche"],
    takeaway: "There are vast treasures hidden in the parts of yourself you have submerged. Dive deep without fear.",
    reflection: "What old dream or forgotten part of yourself is asking to be resurfaced?"
  },
  {
    id: 22,
    emblem: "The Celestial Navigator",
    vision: "A brass astrolabe pointing toward a constellation that shines brighter than the rest of the night sky.",
    insights: ["Guidance from a higher plane", "Looking beyond the immediate", "Trusting the unseen order"],
    takeaway: "When the ground level is chaotic, look up. Your true north is written in the stars, not the dirt.",
    reflection: "What higher principle or overarching goal can serve as your compass right now?"
  },
  {
    id: 23,
    emblem: "The Iron Forge",
    vision: "A heavy hammer striking glowing red steel on an anvil, sending a shower of bright sparks into the dark.",
    insights: ["Active creation", "Striking while the energy is hot", "Shaping your own destiny"],
    takeaway: "This is a moment for action, not contemplation. Use the heat of the moment to forge your reality.",
    reflection: "What creative impulse or idea needs to be struck and shaped into existence today?"
  },
  {
    id: 24,
    emblem: "The Veiled Dancer",
    vision: "A figure moving gracefully behind a sheer curtain, their rhythms unpredictable yet perfectly in tune with an unseen song.",
    insights: ["The mystery of life's flow", "Surrendering control", "Embracing the unknown"],
    takeaway: "You cannot choreograph every step. Let the rhythm of the universe move you without needing to see the whole stage.",
    reflection: "Where do you need to stop planning and simply dance with what is happening?"
  },
  {
    id: 25,
    emblem: "The Silent Bell",
    vision: "A massive, bronze temple bell hanging still in the air. The heavy wooden mallet is pulled back, waiting for the strike.",
    insights: ["Anticipation of the new", "Unmanifested potential", "The power of the pause"],
    takeaway: "Do not rush the climax. The moment before the action holds the concentrated power of all possibilities.",
    reflection: "How can you sit comfortably in the tension of waiting for the right moment?"
  },
  {
    id: 26,
    emblem: "The Silver Mirror",
    vision: "A perfectly polished disc of silver that reflects not your physical face, but the exact state of your soul.",
    insights: ["Unflinching self-honesty", "Facing the true nature", "Piercing through self-deception"],
    takeaway: "Look closely at what is triggering you in others; it is merely a reflection of your own internal landscape.",
    reflection: "What uncomfortable truth about yourself is currently being mirrored by your environment?"
  },
  {
    id: 27,
    emblem: "The Rooted Tree",
    vision: "An ancient oak with roots gripping deep into bedrock, holding fast while a violent storm bends its branches.",
    insights: ["Extreme grounding", "Connecting to ancestry", "Standing firm in chaos"],
    takeaway: "Do not try to fight the wind. Deepen your roots into your core values and let the storm pass over you.",
    reflection: "What core belief or foundation is keeping you anchored right now?"
  },
  {
    id: 28,
    emblem: "The Wandering Fool",
    vision: "A figure stepping joyfully off a cliff edge into the mist, carrying nothing but a small pouch and a white rose.",
    insights: ["Beginner's mind", "A leap of absolute faith", "Holy innocence"],
    takeaway: "The intellect cannot solve this. You must take the blind leap and trust that the universe will catch you.",
    reflection: "Where is logic failing you, and where might a leap of faith serve you better?"
  },
  {
    id: 29,
    emblem: "The Weeping Stone",
    vision: "A boulder in a dry canyon that continuously seeps clear, pure water, slowly carving a channel into the earth.",
    insights: ["Emotional release", "Softening hard edges", "The quiet power of grief"],
    takeaway: "Let the emotion flow. Suppressed tears turn to stone, but expressed feeling carves pathways for new life.",
    reflection: "What heavy emotion have you been refusing to feel, and how can you give it a release valve?"
  },
  {
    id: 30,
    emblem: "The Golden Key",
    vision: "An ornate, glowing key lying abandoned on a velvet pillow, waiting to unlock a door that has no visible handle.",
    insights: ["Sudden access", "Hidden solutions", "Unlocking a new paradigm"],
    takeaway: "The solution to your problem is not more force; it is a shift in perspective. The door is already unlocked.",
    reflection: "What obvious solution are you overlooking because you are convinced the problem is difficult?"
  },
  {
    id: 31,
    emblem: "The Sleeping Dragon",
    vision: "A massive, scaled beast coiled peacefully around a hoard of gold, breathing in a slow, rhythmic slumber.",
    insights: ["Dormant power", "Knowing when to rest", "Conserving energy for the battle"],
    takeaway: "Do not wake your fire for a minor skirmish. Rest deeply and hoard your energy for the true calling.",
    reflection: "Are you wasting your profound energy on trivial arguments or distractions?"
  },
  {
    id: 32,
    emblem: "The Broken Sword",
    vision: "A once-mighty blade snapped in two, the pieces laid gently on an altar surrounded by blooming white lilies.",
    insights: ["Laying down arms", "Finding non-violent solutions", "The end of a long struggle"],
    takeaway: "You cannot win this battle by fighting harder. Surrender the weapons of the ego and seek the path of peace.",
    reflection: "What ongoing argument or internal war do you need to finally walk away from?"
  },
  {
    id: 33,
    emblem: "The Woven Basket",
    vision: "A sturdy basket woven from diverse river reeds, filled to the brim with varied, colorful harvest fruits.",
    insights: ["Gathering resources", "Holding space for others", "The strength of community"],
    takeaway: "You do not have to hold everything in your own hands. Build a structure of support and rely on your weave.",
    reflection: "Who in your community can you reach out to for support or collaboration?"
  },
  {
    id: 34,
    emblem: "The Endless River",
    vision: "A powerful, rushing current of dark blue water that sweeps away debris and constantly reshapes the banks.",
    insights: ["The state of flow", "Radical impermanence", "Letting go of the shore"],
    takeaway: "Stop clinging to the rocks. The faster you accept that everything changes, the smoother the ride will be.",
    reflection: "What outdated attachment are you desperately trying to hold onto in the current?"
  },
  {
    id: 35,
    emblem: "The Mountain Peak",
    vision: "The summit of a great mountain piercing through a sea of clouds, offering a perfectly clear, 360-degree view.",
    insights: ["Higher perspective", "Achieving a long-sought goal", "Seeing the broader landscape"],
    takeaway: "You have climbed above the heavy weather. Take a moment to breathe the thin air and admire how far you have come.",
    reflection: "When you look at your life from the highest possible altitude, what truly matters?"
  },
  {
    id: 36,
    emblem: "The Hollow Bone",
    vision: "A sun-bleached bone lying in the desert, hollowed out by the wind, acting as a perfect flute for the universe.",
    insights: ["Becoming a vessel", "Clearing personal ego", "Channeled wisdom"],
    takeaway: "Empty yourself of preconceptions and opinions. You must become a clear channel for the work to flow through you.",
    reflection: "What personal bias is clogging the channel of your intuition?"
  },
  {
    id: 37,
    emblem: "The Ghost Ship",
    vision: "A grand galleon drifting silently through fog, its sails torn, carrying cargo for a destination that no longer exists.",
    insights: ["Letting go of dead dreams", "Releasing phantom obligations", "Moving on"],
    takeaway: "You are spending energy maintaining a vessel that has already sailed. Let the ghost ship drift into the mist.",
    reflection: "What outdated goal are you still dutifully working toward out of sheer habit?"
  },
  {
    id: 38,
    emblem: "The Crimson Thread",
    vision: "A single, glowing red thread woven through a chaotic tangle of gray yarn, leading somewhere unseen.",
    insights: ["Following the subtle clue", "The pull of destiny", "Trusting the breadcrumbs"],
    takeaway: "Do not try to untangle the whole knot. Just hold onto the one thread that feels true and follow where it leads.",
    reflection: "What is the one small thing that feels unquestionably right in your life right now?"
  },
  {
    id: 39,
    emblem: "The Obsidian Dagger",
    vision: "A blade carved from volcanic glass, sharp enough to cut through illusion without causing unnecessary pain.",
    insights: ["Severing energetic ties", "Setting firm boundaries", "The mercy of the cut"],
    takeaway: "It is time to make a clean, precise cut. Prolonging the connection is only causing a slow drain on your spirit.",
    reflection: "What relationship or commitment needs to be swiftly and permanently severed?"
  },
  {
    id: 40,
    emblem: "The Starless Night",
    vision: "Total, suffocating darkness. There is no moon, there are no stars, only the sound of your own heartbeat.",
    insights: ["The dark night of the soul", "Faith without evidence", "The gestation period"],
    takeaway: "You cannot see the way forward because you are currently the seed buried in the soil. Trust the darkness.",
    reflection: "Can you surrender to the unknown without panicking or forcing a false light?"
  },
  {
    id: 41,
    emblem: "The Blooming Lotus",
    vision: "A pristine, white flower opening its petals perfectly, completely unsullied by the thick, black mud it grew from.",
    insights: ["Spiritual awakening", "Transmuting trauma into beauty", "Inherent purity"],
    takeaway: "Your difficult past is not a stain on your soul; it is the exact nutrient-rich soil required for your current blossoming.",
    reflection: "How has your greatest struggle directly contributed to your most beautiful quality?"
  },
  {
    id: 42,
    emblem: "The Iron Gate",
    vision: "A heavy, rusted portcullis slammed shut across a mountain pass, guarded by silence.",
    insights: ["A hard boundary", "Protection of sacred energy", "A clear 'No' from the universe"],
    takeaway: "Stop rattling the bars. The gate is closed for your protection, redirecting you toward a path of lesser resistance.",
    reflection: "What closed door are you still hopelessly trying to pry open?"
  },
  {
    id: 43,
    emblem: "The Twin Flames",
    vision: "Two fires burning on opposite peaks, flashing in perfect unison, communicating a silent language.",
    insights: ["Divine mirroring", "Intense soul connection", "The alchemical wedding"],
    takeaway: "Pay attention to the person who triggers you the most; they are holding up a perfect mirror to your unhealed self.",
    reflection: "What is your deepest frustration with another person teaching you about yourself?"
  },
  {
    id: 44,
    emblem: "The Empty Chalice",
    vision: "A goblet forged of silver, wiped completely clean and held upright, waiting to be filled.",
    insights: ["Total receptivity", "Unlearning", "Making space for the new"],
    takeaway: "You cannot learn what you think you already know. Empty your cup so the universe can pour something fresh into it.",
    reflection: "What firmly held belief are you willing to put aside to receive new wisdom?"
  },
  {
    id: 45,
    emblem: "The Roaring Fire",
    vision: "A wild, untamed bonfire consuming dry brush, radiating immense heat and casting wild shadows.",
    insights: ["Passion unleashed", "Destruction of the old", "Wild, creative energy"],
    takeaway: "Do not apologize for your intensity. Let the fire burn hot and consume everything that is no longer true.",
    reflection: "Where are you dampening your own fire to make others feel more comfortable?"
  },
  {
    id: 46,
    emblem: "The Silent Scribe",
    vision: "A figure cloaked in gray, quietly writing in a massive ledger with a quill, observing everything, judging nothing.",
    insights: ["Recording reality", "Non-interference", "Taking accurate inventory"],
    takeaway: "Step out of the drama and simply document what is happening. The facts alone will reveal the next step.",
    reflection: "If you removed all emotion from your current situation, what are the bare facts?"
  },
  {
    id: 47,
    emblem: "The Falling Tower",
    vision: "A stone tower struck by a bolt of blue lightning, crumbling instantly to the ground in a cloud of dust.",
    insights: ["Sudden upheaval", "Breaking false foundations", "The collapse of the ego structure"],
    takeaway: "Let it fall. The foundation was built on an illusion, and this sudden destruction is a profound act of grace.",
    reflection: "What sudden disruption in your life is actually liberating you from a trap?"
  },
  {
    id: 48,
    emblem: "The Hidden Sun",
    vision: "A thick bank of gray clouds, but behind them, an unmistakable, radiant glow warms the entire sky.",
    insights: ["Inner light obscured", "Truth waiting to emerge", "Temporary gloom"],
    takeaway: "The light has not gone out; it is simply behind the clouds. Maintain your warmth until the weather breaks.",
    reflection: "How can you generate your own internal light while waiting for the external circumstances to clear?"
  },
  {
    id: 49,
    emblem: "The Winding Spiral",
    vision: "A staircase carved into a giant tree trunk, winding upward. You pass the same view, but from a higher elevation.",
    insights: ["Evolutionary cycles", "Revisiting old lessons", "Progress in disguised repetition"],
    takeaway: "You are not going backward. You are facing the same lesson from a higher level of consciousness. Apply what you know.",
    reflection: "How are you better equipped to handle this returning issue than you were the last time?"
  },
  {
    id: 50,
    emblem: "The Crystal Prism",
    vision: "A flawless, multi-faceted gem catching a single beam of white light and scattering it into a brilliant rainbow.",
    insights: ["Refraction of truth", "Many valid perspectives", "Seeing the spectrum"],
    takeaway: "There is no single truth to this situation. Allow yourself to see all the different colors and facets of the narrative.",
    reflection: "Whose perspective in this situation are you entirely refusing to see?"
  },
  {
    id: 51,
    emblem: "The Ancient Roots",
    vision: "A vast, interconnected network of glowing, golden roots pulsing beneath the dark soil of a quiet forest.",
    insights: ["Ancestral wisdom", "Deep, hidden foundations", "The support of the collective past"],
    takeaway: "You are supported by forces much older and deeper than your individual self. Draw on the strength of your lineage.",
    reflection: "What inherited strength or ancestral resilience can you call upon today?"
  },
  {
    id: 52,
    emblem: "The Cosmic Joke",
    vision: "A theater mask of tragedy suddenly dissolving into a mask of pure, uproarious, joyful comedy.",
    insights: ["Divine humor", "Taking things less seriously", "The play of existence"],
    takeaway: "The universe is playing. Zoom out far enough, and the tragedy you are obsessing over is actually a beautiful comedy.",
    reflection: "Where can you inject a sense of humor and lightness into a situation you've made far too heavy?"
  }
];
export default function App() {
  const [mode, setMode] = useState('menu'); // 'menu', 'single', 'three'
  const [drawnCards, setDrawnCards] = useState([]);
  const [flippedStates, setFlippedStates] = useState([]);

  // Shuffle the deck and draw the requested number of unique cards
  const handleDraw = (count) => {
    const shuffled = [...esotericDeck].sort(() => 0.5 - Math.random());
    setDrawnCards(shuffled.slice(0, count));
    setFlippedStates(new Array(count).fill(false)); // Deal them face down
    setMode(count === 1 ? 'single' : 'three');
  };

  // Flip an individual card when the user clicks it
  const flipCard = (index) => {
    if (flippedStates[index]) return;
    const newFlipped = [...flippedStates];
    newFlipped[index] = true;
    setFlippedStates(newFlipped);
  };

  const reset = () => {
    setMode('menu');
    setDrawnCards([]);
    setFlippedStates([]);
  };

  return (
    <div className="min-h-screen bg-black text-purple-100 font-sans selection:bg-amber-500/30">
      
      {/* Header */}
      <header className="max-w-4xl mx-auto p-6 flex flex-col items-center justify-center space-y-4 pt-16">
        <div className="flex items-center space-x-4 text-amber-500/80">
          <Moon size={22} className="text-amber-400/60" />
          <h1 className="text-3xl md:text-5xl font-serif font-extralight tracking-[0.25em] md:tracking-[0.35em] uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 drop-shadow-[0_2px_15px_rgba(245,158,11,0.2)]">
            Esoteric Oracle
          </h1>
          <Sun size={22} className="text-amber-400/60" />
        </div>
        <p className="text-purple-300/50 text-xs md:text-sm tracking-[0.2em] uppercase text-center max-w-lg font-light">
          Quiet the mind. Focus on your friction. Draw from the void.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6 flex flex-col items-center justify-center pb-24">
        
        {/* Menu State: Choosing the Draw Mode */}
        {mode === 'menu' && (
          <div className="flex flex-col space-y-6 mt-10 w-full max-w-md animate-fade-in">
            <button 
              onClick={() => handleDraw(1)}
              className="group relative px-8 py-5 bg-purple-950/20 border border-amber-500/30 text-amber-400/90 tracking-[0.2em] uppercase text-sm hover:bg-amber-500/10 hover:border-amber-500/60 transition-all duration-500 rounded-2xl overflow-hidden flex flex-col items-center shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]"
            >
              <Sparkles size={20} className="mb-2 text-amber-400/80 transition-transform duration-500 group-hover:scale-110" />
              <span className="font-serif font-light tracking-widest mb-1 text-amber-200">Direct Query</span>
              <span className="text-xs text-purple-300/50 font-sans tracking-normal capitalize">Focus & draw a single card</span>
            </button>

            <button 
              onClick={() => handleDraw(3)}
              className="group relative px-8 py-5 bg-purple-950/20 border border-amber-500/30 text-amber-400/90 tracking-[0.2em] uppercase text-sm hover:bg-amber-500/10 hover:border-amber-500/60 transition-all duration-500 rounded-2xl overflow-hidden flex flex-col items-center shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]"
            >
              <Flame size={20} className="mb-2 text-amber-400/80 transition-transform duration-500 group-hover:scale-110" />
              <span className="font-serif font-light tracking-widest mb-1 text-amber-200">Intuitive Pull</span>
              <span className="text-xs text-purple-300/50 font-sans tracking-normal capitalize">Draw 3 interacting archetypes</span>
            </button>
          </div>
        )}

        {/* Active Draw State: Cards on the Table */}
        {mode !== 'menu' && (
          <div className="w-full flex flex-col items-center animate-fade-in">
            <button 
              onClick={reset}
              className="mb-12 px-6 py-2 rounded-full border border-purple-900/40 bg-purple-950/20 text-xs tracking-[0.25em] uppercase text-purple-300/60 hover:text-amber-300 hover:border-amber-500/40 transition-all duration-300 shadow-sm"
            >
              Return to the Void
            </button>

            {/* Card Grid */}
            <div className={`flex flex-col lg:flex-row gap-8 justify-center items-center w-full ${mode === 'single' ? 'max-w-md' : 'max-w-6xl'}`}>
              {drawnCards.map((card, idx) => (
                <div key={card.id} className="relative w-full max-w-sm aspect-[2/3] perspective-1000">
                  <div 
                    className={`w-full h-full relative preserve-3d transition-transform duration-700 ease-out ${flippedStates[idx] ? 'rotate-y-180' : ''}`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    
                    {/* Card Back (Face Down) */}
                    <div 
                      className="absolute w-full h-full backface-hidden bg-neutral-950 border border-purple-900/30 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center p-8 cursor-pointer hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)] transition-all duration-500 group"
                      style={{ backfaceVisibility: 'hidden' }}
                      onClick={() => flipCard(idx)}
                    >
                      <Eye className="text-purple-900/80 group-hover:text-amber-500/60 mb-4 transition-colors duration-500" size={48} />
                      <div className="w-16 h-16 border border-purple-900/50 group-hover:border-amber-500/40 rotate-45 flex items-center justify-center transition-colors duration-500 rounded-lg">
                        <div className="w-8 h-8 border border-purple-900/30 group-hover:border-amber-500/30 rotate-45 transition-colors duration-500 rounded-md"></div>
                      </div>
                      <span className="absolute bottom-8 text-xs tracking-[0.25em] uppercase text-purple-700/60 group-hover:text-amber-500/50 transition-colors duration-500 font-serif">
                        Reveal
                      </span>
                    </div>

                    {/* Card Front (Face Up) */}
                    <div 
                      className="absolute w-full h-full backface-hidden bg-neutral-950 border border-amber-500/30 rounded-2xl shadow-[0_0_40px_rgba(245,158,11,0.1)] flex flex-col p-6 md:p-8 overflow-y-auto"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <div className="flex flex-col h-full animate-fade-in">
                        <div className="text-center mb-6">
                          <Flame className="text-amber-500/80 mx-auto mb-2" size={22} />
                          <h2 className="text-xl md:text-2xl text-amber-300 font-serif font-light tracking-widest uppercase leading-tight">{card.emblem}</h2>
                        </div>
                        
                        <div className="space-y-5 flex-grow text-sm leading-relaxed text-purple-100/90">
                          <div>
                            <h3 className="text-xs text-amber-500/60 uppercase tracking-widest mb-1 font-serif">The Vision</h3>
                            <p className="italic text-purple-200/70">"{card.vision}"</p>
                          </div>

                          <div>
                            <h3 className="text-xs text-amber-500/60 uppercase tracking-widest mb-2 font-serif">Core Insights</h3>
                            <ul className="list-disc list-inside space-y-1 text-purple-200/70">
                              {card.insights.map((insight, i) => (
                                <li key={i}>{insight}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-xs text-amber-500/60 uppercase tracking-widest mb-1 font-serif">The Takeaway</h3>
                            <p>{card.takeaway}</p>
                          </div>
                        </div>

                        <div className="mt-6 pt-5 border-t border-purple-900/30 text-center">
                          <h3 className="text-xs text-amber-500/60 uppercase tracking-widest mb-2 font-serif">Reflection</h3>
                          <p className="font-serif italic text-amber-200/80 text-sm">"{card.reflection}"</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}