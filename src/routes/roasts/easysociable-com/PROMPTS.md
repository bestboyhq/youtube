# Prompts that built the EasySociable roast

The EasySociable roast was built in four chats, one roast folder, and a lot of before/after slider checks.
These are the prompts Simon sent, in order and lightly edited for readability, with a note on why each one worked.

The pattern is short: explore, decide, correct.
Ask for several directions before any code is written.
Pick one by its letter and name.
Correct with specifics: what is wrong, what the product really is, and what to keep.

## 1. Open the roast

Chat: `Running Easilysociable roast`

```text
Run and open the EasySociable roast. We'll be improving it.
```

**Why it works:** it names the subject and the intent.
The agent starts from a running page instead of guessing what to build.

## 2. Redesign in grayscale

Chat: `Website grayscale redesign`

```text
Go over this website, neutralize the design and colors (follow the grayscale method from
https://readsimon.com/the-1-minute-color-system), and use simple, clean UI elements.

Make sure content edges are aligned, the navbar has a low-key backdrop blur, our animations
feel snappy, and everything comes together in a synergy.

I want our UI to feel clean, thoughtful and not make me think - every detail is critical,
because it will come together as one cohesive experience for the visitor. Mobile native
isn't optional. Follow whatever theme the website is already using, don't shift it.

Whenever unsure, show me 3 directions and ask whichever I'd prefer.
```

**Why it works:** it gives a method to follow, concrete quality bars, and a rule for uncertainty.
The last line turns every ambiguous choice into a small set of options instead of a guess.

## 3. Pick the direction

Chat: `Website grayscale redesign`

```text
Go with variant C (Grid).
```

**Why it works:** it repeats the letter and the name.
One line, no ambiguity, and the agent builds exactly the direction that was shown.

## 4. Sharpen the messaging

Chat: `Landing page messaging sharpening`

```text
Our landing page copy and communication are too complicated, vague, or not well adjusted
to the ICP of the product. Profile the ICPs from the website and show me directions we
could take to address them in the most informative way - we care about conversions.
I'd love it to lead with a combination of dream outcome and low effort.

Show me 3 potential directions we could explore to sharpen the messaging on our website.
```

**Why it works:** it asks for research before design, names the metric that matters,
and supplies the formula to lead with: dream outcome plus low effort.

Feedback after the first three directions:

```text
I see you were really experimenting with the wording, but the wording could be much
simpler and just lead with the outcome. The original wording was fine - it was just
overcomplicated, and people expect something simple and digestible that leads with
outcome and action and reads easily.

Also, I don't think this website is about agents doing social or queuing up or letting
go. I believe this website is about carousels - carousels that make people stop
scrolling. That's a pretty unique proposition. I don't exactly understand the pricing
model, but I believe this is what the website is aiming to solve. Show me a bunch of
directions that take that into account, because currently it feels like there is a ton
of copy.

The content width is also quite wide. I don't understand why we're taking so much width.
It feels like a lot of content and a lot is happening, and sometimes content is somewhat
difficult to decode. For example, in section two, fix the words without touching the
layout. The image there is super tiny - it would be lovely to have some visual animation
for it. Also, the website is using an enormous amount of borders; I don't know if we
need so many. We could improve so much on that. Please show me a bunch of directions we
could take.
```

**Why it works:** it does three jobs at once.
It says what is wrong (copy, width, borders, a tiny image), what the product really is (scroll-stopping carousels), and what to keep (the original wording, the layout).
The concrete defects keep the next round from drifting.

Combine the best parts:

```text
I like the copy from the first one the most. I like the hero section layout from the
second one the most, but I like the entire page structure - the three steps - and the
proof from the third one the most. So go ahead and combine all of those into the actual
final result.
```

**Why it works:** it picks by attribute instead of picking a whole variant.
The agent knows exactly which piece comes from where, and nothing else changes.

## 5. Rework the hero

Chat: `Landing page hero rework`

```text
Our landing page is decent and the copy is okay, but the hero section still doesn't deliver.

Show me 5 potential directions for exploring a strong halo effect in our hero section -
right now it feels quite basic and maybe noisy.

We also lost a lot of content along the way, like in the footer. I don't understand
exactly why, and I think we're not explaining all the features properly. I was enjoying
having all of that content in place, and now it feels like we just ripped off a lot of
the content, which isn't great.

Oh, and maybe we could not go with fully white cards on a dark background. It feels
slightly too intense.
```

**Why it works:** it reports a regression and an aesthetic tweak beside the new ask.
The agent restores the missing content and changes the card color while it explores the hero,
instead of fixing one thing and leaving the other two broken.

Pick the halo:

```text
Go with variant E (Spotlight).
```

**Why it works:** same as before.
Name the variant, and the exploration turns into one clear implementation.
