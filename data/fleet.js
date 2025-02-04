import {Image} from 'react-native';

export const fleet = [
  {
    id: 1,
    admiral: 'Horatio Nelson',
    ship: 'HMS Victory',
    type: '104-gun first-rate ship of the line',
    launched: 1765,
    length: 227,
    significance:
      'Flagship at the Battle of Trafalgar, secured British naval supremacy',
    currentStatus: 'Preserved as a museum ship in Portsmouth',
    description:
      "HMS Victory was a marvel of naval engineering for its time. Constructed from oak with a reinforced hull to withstand enemy fire, Victory was a formidable vessel. Her broadside could unleash devastating volleys, making her one of the most powerful ships in the Royal Navy. Victory played a pivotal role in several key battles, including the Battle of Cape St. Vincent and the Battle of the Nile. However, it was during the Battle of Trafalgar in 1805 that Victory cemented its place in naval history. Nelson, aboard Victory, led the British fleet in a decisive victory against the combined French and Spanish fleets. Despite being mortally wounded on the deck of his beloved ship, Nelson's tactical brilliance and leadership resulted in a victory that secured British naval supremacy for over a century.",
    famousBattles: [
      'Battle of Cape St. Vincent',
      'Battle of the Nile',
      'Battle of Trafalgar',
    ],
    battle: {
      image: require('../assets/image/battles/trafalgar.jpg'),
      name: 'Battle of Trafalgar',
      date: 'October 21, 1805',
      description:
        "The Battle of Trafalgar was one of the most decisive naval engagements in British history. Led by Admiral Horatio Nelson, the British fleet faced off against a combined French-Spanish fleet off the coast of Spain. Despite being outnumbered, Nelson's innovative tactics—breaking the enemy's line and engaging them in close combat—led to a resounding victory for the British. This battle not only secured Britain's naval dominance but also ensured that Napoleon's plans for invading England were thwarted. Nelson, though mortally wounded during the battle, became a national hero, and his legacy as one of the greatest naval commanders endures to this day.",
    },
  },
  {
    id: 2,
    admiral: 'Francis Drake',
    ship: 'Golden Hind',
    type: 'Galleon',
    launched: 1577,
    length: 70,
    significance: 'Circumnavigated the globe, captured Spanish treasure',
    currentStatus: 'Replica exists in London',
    description:
      "Originally named the Pelican, Drake renamed the ship during his expedition in honor of his patron, Sir Christopher Hatton, whose family crest featured a golden hind. The ship was 120 tons with a length of around 70 feet, equipped with 22 guns and a complement of 80 men, making it well-suited for long voyages and swift attacks on enemy ships. The Golden Hind is most renowned for its role in Drake's circumnavigation from 1577 to 1580, during which the ship captured a vast amount of treasure from Spanish galleons, particularly the Nuestra Señora de la Concepción, a richly laden treasure ship. Drake's success on the Golden Hind dealt a significant blow to Spain and bolstered England's naval reputation.",
    famousBattles: ['Capture of Nuestra Señora de la Concepción'],
    battle: {
      image: require('../assets/image/battles/gravelines.jpg'),
      name: 'Battle of Gravelines',
      date: '1588',
      description:
        "The Battle of Gravelines was the pivotal confrontation during the Spanish Armada's failed attempt to invade England in 1588. Under the command of Sir Francis Drake and Lord Charles Howard, the English fleet utilized smaller, more maneuverable ships to attack the larger and slower Spanish galleons. The Spanish Armada was decisively defeated, with many of its ships either destroyed or scattered by storms. Drake's leadership and bold tactics were instrumental in this victory, solidifying his reputation as one of England's great maritime heroes and ensuring England's survival as a Protestant nation.",
    },
  },
  {
    id: 3,
    admiral: 'Edward Vernon',
    ship: 'HMS Burford',
    type: '70-gun third-rate ship of the line',
    launched: 1722,
    length: 151,
    significance: 'Led successful attack on Porto Bello',
    currentStatus: 'Decommissioned',
    description:
      "As a well-armed and heavily fortified vessel, the Burford was built for endurance and power, ideal for leading naval assaults in the Caribbean during the War of Jenkins' Ear. The ship had a complement of around 500 officers and crewmen, making it a powerful force on the seas. Vernon's command of the Burford was highlighted by his successful attack on the Spanish port of Porto Bello in 1739, where he captured the town with minimal British casualties. This victory, achieved with only six ships, brought Vernon great fame back in Britain.",
    famousBattles: ['Capture of Porto Bello'],
    battle: {
      image: require('../assets/image/battles/portobello.jpg'),
      name: 'Capture of Porto Bello',
      date: 'November 22, 1739',
      description:
        "Admiral Edward Vernon made his mark in the War of Jenkins' Ear with the successful capture of the Spanish-held port of Porto Bello, located in present-day Panama. Vernon led a British squadron in a surprise attack against the fortified city. The swift victory without significant British losses was celebrated across Britain and contributed to Vernon's status as a reformer and tactician in the Royal Navy. The triumph at Porto Bello showcased Britain's growing power in the Caribbean and helped establish its influence in the region.",
    },
  },
  {
    id: 4,
    admiral: 'John Jellicoe',
    ship: 'HMS Iron Duke',
    type: 'Dreadnought battleship',
    launched: 1912,
    length: 622,
    significance: 'Flagship during the Battle of Jutland',
    currentStatus: 'Scrapped in 1946',
    description:
      "As part of the Royal Navy's Grand Fleet, Iron Duke was designed to dominate the seas with its heavy armament and advanced technology. The ship carried ten 13.5-inch guns capable of long-range fire, which were housed in turrets that could rotate to target enemy ships from multiple angles. With a top speed of 21.25 knots, Iron Duke was a formidable symbol of British naval power. At Jutland in 1916, Jellicoe commanded the Grand Fleet from Iron Duke, using its advanced communication systems to coordinate the actions of more than 150 ships.",
    famousBattles: ['Battle of Jutland'],
    battle: {
      image: require('../assets/image/battles/jutland1.jpg'),
      name: 'Battle of Jutland',
      date: 'May 31 to June 1, 1916',
      description:
        "The Battle of Jutland, the largest naval battle of World War I, took place between the British Grand Fleet, commanded by Admiral John Jellicoe, and the German High Seas Fleet. Although the battle was tactically inconclusive, Jellicoe's cautious approach ensured that the British fleet maintained control of the North Sea. His decisions during the engagement were both praised and criticized, but Jellicoe's primary objective—to prevent the German fleet from breaking the British naval blockade—was achieved, ultimately contributing to the Allied victory in the war.",
    },
  },
  {
    id: 5,
    admiral: 'David Beatty',
    ship: 'HMS Lion',
    type: 'Battlecruiser',
    launched: 1910,
    length: 700,
    significance: 'Flagship at the Battle of Jutland',
    currentStatus: 'Scrapped in 1924',
    description:
      "Lion was designed to be fast, heavily armed, and capable of long-range engagements, equipped with eight 13.5-inch guns. Its design emphasized speed, with a top speed of 27 knots, which allowed Beatty to lead his fleet into swift engagements with enemy forces. However, its lighter armor made it vulnerable to concentrated fire. Lion served as Beatty's flagship at the Battle of Jutland, where it saw intense combat with the German High Seas Fleet. During the early stages of the battle, Lion was heavily damaged by German fire, and its Q turret was nearly destroyed, leading to significant casualties.",
    famousBattles: ['Battle of Jutland'],
    battle: {
      image: require('../assets/image/battles/jutland2.jpg'),
      name: 'Battle of Jutland',
      date: 'May 31 to June 1, 1916',
      description:
        "Admiral David Beatty played a crucial role in the Battle of Jutland as the commander of the British battlecruiser squadron. Known for his aggressive style of command, Beatty engaged the German fleet early in the battle, though his force suffered heavy losses due to inadequate armor on the British ships. Despite these setbacks, Beatty's actions helped draw the German fleet into Jellicoe's path, setting the stage for the larger engagement. Beatty's reputation as a daring and charismatic leader was solidified, and he later succeeded Jellicoe as First Sea Lord.",
    },
  },
  {
    id: 6,
    admiral: 'George Anson',
    ship: 'HMS Centurion',
    type: '60-gun fourth-rate ship of the line',
    launched: 1732,
    length: 144,
    significance:
      'Circumnavigated the globe, captured Spanish treasure galleon',
    currentStatus: 'Decommissioned',
    description:
      "Centurion was built for long voyages, making it ideal for Anson's expedition to the Pacific during the War of Jenkins' Ear. The ship was well-armed and manned by a crew of 400, though scurvy and other hardships would reduce its crew considerably during the voyage. Anson's most significant achievement aboard Centurion came in 1743, when he captured the Spanish treasure galleon Nuestra Señora de Covadonga off the coast of the Philippines. The capture of this ship brought immense wealth to Britain and helped solidify Anson's reputation as a naval hero.",
    famousBattles: ['Capture of Nuestra Señora de Covadonga'],
    battle: {
      image: require('../assets/image/battles/capeFinisterre.jpg'),
      name: 'Battle of Cape Finisterre',
      date: 'May 3, 1747',
      description:
        "George Anson, a celebrated British admiral and explorer, commanded the British fleet during the Battle of Cape Finisterre during the War of the Austrian Succession. The British engaged a French convoy attempting to resupply their forces in North America. Anson's fleet decisively defeated the French, capturing several ships and ensuring British dominance in the Atlantic. Anson's leadership in this and other naval engagements helped secure Britain's position as a global maritime power.",
    },
  },
  {
    id: 7,
    admiral: 'Charles Napier',
    ship: 'HMS St. Vincent',
    type: '120-gun first-rate ship of the line',
    launched: 1815,
    length: 190,
    significance: 'Powerful deterrent in the Mediterranean Fleet',
    currentStatus: 'Decommissioned',
    description:
      'As one of the largest ships in the Royal Navy, it could carry over 900 men, making it a formidable force in any engagement. Although Napier would later become famous for his role in smaller frigates and unconventional tactics, his early experience aboard St. Vincent helped shape his naval career. The ship represented the might of the Royal Navy during the post-Napoleonic era, a period when Britain was the undisputed master of the seas.',
    famousBattles: [],
    battle: {
      image: require('../assets/image/battles/firstCopenhagen.jpg'),
      name: 'Battle of Copenhagen',
      date: 'April 2, 1801',
      description:
        "The Battle of Copenhagen was part of the Napoleonic Wars and saw the British fleet, led by Admiral Sir Hyde Parker and Vice-Admiral Horatio Nelson, engage the Danish navy. Although not in overall command, Charles Napier played a vital role as a captain in this action. The battle ended in a British victory, with much of the Danish fleet destroyed or captured. Napier's courage and seamanship were recognized, and this engagement cemented British control over northern European waters during a critical period of the Napoleonic Wars.",
    },
  },
  {
    id: 8,
    admiral: 'James Gambier',
    ship: 'HMS Prince of Wales',
    type: '98-gun second-rate ship of the line',
    launched: 1794,
    length: 182,
    significance: 'Participated in the Second Battle of Copenhagen',
    currentStatus: 'Decommissioned',
    description:
      "Prince of Wales was heavily armed and capable of engaging in line-of-battle tactics. The ship was one of the most powerful vessels of its time, able to carry 750 officers and men. Under Gambier's command, Prince of Wales participated in the Second Battle of Copenhagen in 1807, where Gambier was tasked with neutralizing the Danish fleet to prevent it from falling into Napoleon's hands. The ship's firepower was crucial in the bombardment of Copenhagen, which led to the surrender of the Danish fleet.",
    famousBattles: ['Second Battle of Copenhagen'],
    battle: {
      image: require('../assets/image/battles/secondCopenhagen.jpg'),
      name: 'Second Battle of Copenhagen',
      date: '1807',
      description:
        "Admiral James Gambier was the commander of the British fleet during the Second Battle of Copenhagen in 1807, a key event in the Napoleonic Wars. The British, fearing that Denmark's fleet might fall into Napoleon's hands, launched a preemptive strike on the Danish capital. After a brutal bombardment, Gambier's fleet seized the Danish navy, preventing it from being used against Britain. Although controversial due to the attack on a neutral power, this action was seen as a necessary measure to maintain British naval superiority in Europe.",
    },
  },
  {
    id: 9,
    admiral: 'Richard Howe',
    ship: 'HMS Queen Charlotte',
    type: '100-gun first-rate ship of the line',
    launched: 1790,
    length: 190,
    significance: 'Flagship during the Glorious First of June',
    currentStatus: 'Destroyed by fire in 1800',
    description:
      "Queen Charlotte was one of the most advanced and powerful vessels in the Royal Navy at the time. Armed with an impressive array of heavy cannons, Queen Charlotte was built for direct confrontation in line-of-battle engagements. Howe's most notable achievement aboard Queen Charlotte came during the Battle of the Glorious First of June in 1794. As commander of the Channel Fleet, Howe used the ship's superior firepower and maneuverability to outflank and decisively defeat a French fleet attempting to escort a convoy of grain ships.",
    famousBattles: ['Battle of the Glorious First of June'],
    battle: {
      image: require('../assets/image/battles/ushant.jpg'),
      name: 'Battle of Ushant',
      date: 'July 27, 1778',
      description:
        "The Battle of Ushant was one of the early naval engagements of the American Revolutionary War. Admiral Richard Howe, commanding the British Channel Fleet, confronted a French fleet off the coast of Brittany. The battle ended inconclusively, with both fleets sustaining damage but neither side claiming a clear victory. However, Howe's leadership in defending British waters from French intervention during the American War of Independence was widely respected, and he would later play key roles in other major naval operations.",
    },
  },
  {
    id: 10,
    admiral: 'Samuel Hood',
    ship: 'HMS Barfleur',
    type: '90-gun second-rate ship of the line',
    launched: 1768,
    length: 176,
    significance: 'Key player in the Battle of the Saintes',
    currentStatus: 'Decommissioned',
    description:
      "Barfleur was a well-armed and durable vessel, capable of carrying up to 750 officers and men. Its name commemorated the 1692 Battle of Barfleur, a famous victory over the French. Hood's most significant command aboard Barfleur came during the Battle of the Saintes in 1782, where his fleet defeated a French squadron attempting to seize control of the Caribbean. Barfleur was a key player in the battle, delivering devastating broadsides that helped break the French line and secure British dominance in the West Indies.",
    famousBattles: ['Battle of the Saintes'],
    battle: {
      image: require('../assets/image/battles/basseterre.jpg'),
      name: 'Battle of Basseterre',
      date: 'January 24, 1782',
      description:
        "Admiral Samuel Hood played a significant role in the Battle of Basseterre, part of the larger campaign for control of the Caribbean during the American Revolutionary War. Fought off the coast of St. Kitts, Hood managed to outmaneuver a superior French fleet, delaying their assault and protecting British positions in the West Indies. Although the British ultimately lost St. Kitts, Hood's tactical brilliance allowed for a graceful withdrawal, preserving much of his fleet and reputation as one of Britain's finest naval commanders.",
    },
  },
];
