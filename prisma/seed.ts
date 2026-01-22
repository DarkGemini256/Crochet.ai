import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // Create demo user
  const hashedPassword = await bcrypt.hash('demo123', 10);
  
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@crochet.ai' },
    update: {},
    create: {
      email: 'demo@crochet.ai',
      password: hashedPassword,
      name: 'Demo User',
      skillLevel: 'intermediate',
      onboardingComplete: true,
      bio: 'Passionate about crochet and creating beautiful patterns!',
    },
  });

  console.log('Created demo user:', demoUser.email);

  // Seed example patterns
  const patterns = [
    {
      title: 'Simple Granny Square',
      description: 'A classic granny square pattern perfect for beginners. Great for blankets, cushions, and more!',
      difficulty: 'beginner',
      category: 'home-decor',
      materials: ['Worsted weight yarn', 'Size H (5mm) crochet hook', 'Scissors', 'Yarn needle'],
      hookSize: '5mm (H)',
      gaugeInfo: '4 inches = 16 stitches',
      estimatedTime: '30 minutes',
      instructions: `Round 1: Ch 4, join with sl st to form ring. Ch 3 (counts as dc), 2 dc in ring, ch 2, *3 dc in ring, ch 2; repeat from * twice more. Join with sl st to top of ch-3.

Round 2: Sl st to ch-2 space, ch 3, (2 dc, ch 2, 3 dc) in same space, ch 1, *(3 dc, ch 2, 3 dc) in next ch-2 space, ch 1; repeat from * twice more. Join with sl st to top of ch-3.

Round 3: Sl st to ch-2 space, ch 3, (2 dc, ch 2, 3 dc) in same space, ch 1, 3 dc in next ch-1 space, ch 1, *(3 dc, ch 2, 3 dc) in next ch-2 space, ch 1, 3 dc in next ch-1 space, ch 1; repeat from * twice more. Join with sl st to top of ch-3.

Fasten off and weave in ends.`,
      isPublic: true,
      isFeatured: true,
      authorId: demoUser.id,
    },
    {
      title: 'Cute Amigurumi Bear',
      description: 'An adorable teddy bear pattern that makes a perfect gift. Suitable for those with some crochet experience.',
      difficulty: 'intermediate',
      category: 'amigurumi',
      materials: ['Sport weight yarn (brown, black, white)', 'Size E (3.5mm) crochet hook', 'Fiberfill stuffing', 'Safety eyes (12mm)', 'Yarn needle'],
      hookSize: '3.5mm (E)',
      gaugeInfo: 'Not critical for amigurumi',
      estimatedTime: '4-6 hours',
      instructions: `HEAD:
Round 1: 6 sc in magic ring (6)
Round 2: inc in each st around (12)
Round 3: *sc, inc* repeat (18)
Round 4: *2 sc, inc* repeat (24)
Round 5: *3 sc, inc* repeat (30)
Rounds 6-10: sc around (30)
Round 11: *3 sc, dec* repeat (24)
Round 12: *2 sc, dec* repeat (18)
Insert safety eyes between rounds 8 and 9
Stuff firmly
Round 13: *sc, dec* repeat (12)
Round 14: dec around (6)
Fasten off, leaving long tail for sewing

BODY:
Work same as head through Round 10
Continue with body shaping...
(Pattern continues with legs, arms, and ears)`,
      isPublic: true,
      isFeatured: true,
      authorId: demoUser.id,
    },
    {
      title: 'Cozy Winter Scarf',
      description: 'A warm and stylish scarf pattern with a beautiful textured stitch. Perfect for cold weather!',
      difficulty: 'beginner',
      category: 'accessories',
      materials: ['Bulky weight yarn', 'Size K (6.5mm) crochet hook', 'Scissors', 'Yarn needle'],
      hookSize: '6.5mm (K)',
      gaugeInfo: '4 inches = 12 stitches',
      estimatedTime: '3-4 hours',
      instructions: `Chain 25 (or desired width)

Row 1: Sc in 2nd ch from hook and each ch across. Turn. (24 sc)

Row 2: Ch 1, sc in first st, *skip next st, 3 dc in next st, skip next st, sc in next st; repeat from * across. Turn.

Row 3: Ch 3 (counts as dc), dc in same st, *sc in center dc of 3-dc group, 3 dc in next sc; repeat from * across, ending with 2 dc in last sc. Turn.

Repeat Rows 2-3 until scarf measures desired length (typically 60-70 inches).

Fasten off and weave in ends. Add fringe if desired.`,
      isPublic: true,
      isFeatured: false,
      authorId: demoUser.id,
    },
    {
      title: 'Modern Crop Top',
      description: 'A trendy summer crop top with a fitted design. Advanced pattern with detailed sizing options.',
      difficulty: 'advanced',
      category: 'garments',
      materials: ['DK weight cotton yarn', 'Size F (3.75mm) crochet hook', 'Stitch markers', 'Yarn needle'],
      hookSize: '3.75mm (F)',
      gaugeInfo: '4 inches = 18 stitches and 10 rows',
      estimatedTime: '8-12 hours',
      instructions: `SIZES: XS (S, M, L, XL)
Finished bust: 32 (36, 40, 44, 48) inches

BODY (worked in rounds from bottom up):
Chain 144 (162, 180, 198, 216), join with sl st to form ring.

Round 1: Ch 1, sc in each ch around. Join. (144/162/180/198/216 sc)

Round 2: Ch 3, dc in each st around. Join.

Round 3-8: Repeat Round 2.

Continue with body shaping and straps...
(Detailed pattern continues with increases, decreases, and strap construction)`,
      isPublic: true,
      isFeatured: false,
      authorId: demoUser.id,
    },
    {
      title: 'Elegant Table Runner',
      description: 'A sophisticated table runner with a lacy design. Great for home decoration and special occasions.',
      difficulty: 'intermediate',
      category: 'home-decor',
      materials: ['Crochet thread (size 10)', 'Size 7 (1.65mm) steel crochet hook', 'Blocking pins', 'Starch (optional)'],
      hookSize: '1.65mm (7 steel)',
      gaugeInfo: 'One motif = 4 inches square',
      estimatedTime: '6-8 hours',
      instructions: `MOTIF (make 15):
Chain 8, join with sl st to form ring.

Round 1: Ch 3, 23 dc in ring. Join. (24 dc)

Round 2: Ch 5, *skip 2 dc, dc in next dc, ch 2; repeat from * around. Join to 3rd ch of ch-5. (8 ch-2 spaces)

Round 3: Ch 3, 4 dc in same space, *sc in next dc, 5 dc in next ch-2 space; repeat from * around. Join.

Continue with rounds 4-6 for full motif...

ASSEMBLY:
Join motifs using slip stitch method or whip stitch to create runner (3 motifs wide x 5 motifs long).

Block finished runner to measurements.`,
      isPublic: true,
      isFeatured: false,
      authorId: demoUser.id,
    },
  ];

  for (const patternData of patterns) {
    const pattern = await prisma.pattern.create({
      data: patternData,
    });
    console.log('Created pattern:', pattern.title);
  }

  // Seed tutorials
  const tutorials = [
    {
      title: 'Getting Started: Basic Chain Stitch',
      description: 'Learn the foundation of all crochet - the chain stitch.',
      content: `The chain stitch is the foundation of crochet. Here's how to make it:

1. Make a slip knot and place it on your hook
2. Yarn over (wrap yarn around hook from back to front)
3. Pull the yarn through the loop on your hook
4. You've made one chain stitch!

Repeat steps 2-3 to create a chain of desired length.

Tips:
- Keep tension consistent
- Don't pull too tight
- Count your chains as you go
- The loop on the hook doesn't count as a stitch`,
      difficulty: 'beginner',
      category: 'stitches',
      duration: '5 minutes',
      order: 1,
    },
    {
      title: 'Single Crochet Stitch',
      description: 'Master the single crochet - the most basic crochet stitch.',
      content: `The single crochet (sc) creates a tight, dense fabric.

How to single crochet:
1. Insert hook into designated stitch
2. Yarn over and pull through (2 loops on hook)
3. Yarn over and pull through both loops
4. One single crochet complete!

Working into a chain:
- Insert hook under top two loops of chain
- Complete single crochet as above

Tips:
- Keep tension even
- Don't skip stitches
- Count your stitches at the end of each row`,
      difficulty: 'beginner',
      category: 'stitches',
      duration: '7 minutes',
      order: 2,
    },
    {
      title: 'Reading Crochet Patterns',
      description: 'Decode crochet abbreviations and pattern instructions.',
      content: `Understanding pattern terminology:

Common abbreviations:
- ch = chain
- sc = single crochet
- dc = double crochet
- sl st = slip stitch
- inc = increase
- dec = decrease
- rep = repeat
- [ ] or * * = repeat instructions

Pattern structure:
1. Materials list
2. Gauge information
3. Finished measurements
4. Stitch instructions

Reading instructions:
- Follow row/round numbers in order
- Parentheses show repeats: (sc, ch 1) 3 times
- Asterisks also indicate repeats: *sc in next 2 sts, inc* around
- Commas separate different stitches in same location`,
      difficulty: 'beginner',
      category: 'tips-tricks',
      duration: '10 minutes',
      order: 3,
    },
    {
      title: 'Invisible Join Technique',
      description: 'Create seamless joins in your crochet projects.',
      content: `The invisible join creates a seamless finish when working in rounds.

Traditional method:
At end of round, cut yarn leaving 6-inch tail. Thread yarn needle.

Steps:
1. Insert needle under both loops of first stitch of round
2. Insert needle from back to front through top of last stitch
3. Pull tight to close gap
4. Weave in end on wrong side

Seamless join:
Creates nearly invisible connection between rounds, perfect for amigurumi and other projects where seams show.`,
      difficulty: 'intermediate',
      category: 'techniques',
      duration: '8 minutes',
      order: 4,
    },
    {
      title: 'Color Changing Like a Pro',
      description: 'Learn to change colors cleanly for stripe patterns.',
      content: `Clean color changes make striped projects look professional.

When to change:
Change on last yarn over of previous color.

Steps for stripe:
1. Work last stitch of old color until 2 loops remain on hook
2. Yarn over with new color
3. Complete stitch with new color
4. Continue with new color
5. Carry unused yarn along edge or cut and weave in

Tips:
- Change at end of row for stripes
- Join new colors at beginning of round for circular projects
- Weave in ends as you go for fewer finishing tasks
- Use same technique for color changes in amigurumi`,
      difficulty: 'intermediate',
      category: 'techniques',
      duration: '12 minutes',
      order: 5,
    },
  ];

  for (const tutorialData of tutorials) {
    const tutorial = await prisma.tutorial.create({
      data: tutorialData,
    });
    console.log('Created tutorial:', tutorial.title);
  }

  // Create a sample project
  const sampleProject = await prisma.project.create({
    data: {
      title: 'My First Granny Square Blanket',
      description: 'Working on a cozy blanket made of granny squares',
      status: 'in_progress',
      progressPercent: 45,
      startedAt: new Date(),
      userId: demoUser.id,
      patternId: (await prisma.pattern.findFirst({ where: { title: 'Simple Granny Square' } }))?.id,
      notes: 'Using blue and white yarn. Planning to make 48 squares total.',
    },
  });
  console.log('Created sample project:', sampleProject.title);

  // Create a sample community post
  const samplePost = await prisma.communityPost.create({
    data: {
      title: 'Just finished my first amigurumi!',
      content: 'So excited to share my completed teddy bear. It took me a week but I\'m so proud of the result! Any tips for making the limbs more symmetrical?',
      authorId: demoUser.id,
      likes: 12,
    },
  });
  console.log('Created sample community post:', samplePost.title);

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
