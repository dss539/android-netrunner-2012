# Android: Netrunner (2012) — Mechanics-First Guide

This guide teaches the game in layers. Read Lessons 1 and 2 before playing. Lesson 3 covers common card-driven mechanics. Lesson 4 handles less-common rules and edge cases.

---

# Lesson 1 — Learn the Core Game

## 1. What each player is trying to do

One player is the **Corporation/Corp (company player)**. The other is the **Runner (hacker player)**.

- The Corp installs and develops **agendas (scoring cards)**.
- The Runner attacks the Corp’s **servers (card-storage areas)** and steals agendas.
- The first player to reach **7 agenda points** wins.

Other ways to win:

- The Corp wins by **flatlining (defeating through damage)** the Runner.
- The Runner wins if the Corp must draw from an empty deck.

## 2. The playing areas

### Corp areas

The Corp has three permanent **central servers (built-in servers)**:

- **HQ (Corp hand)**
- **R&D (Corp draw pile)**
- **Archives (Corp discard pile)**

Each central server has its own:

- Line of **ICE (defensive cards)**
- **Root (attached upgrade area)**

The Corp can also create any number of **remote servers (user-created servers)**.

A remote server may contain:

- One agenda or one **asset (Corp utility or trap card)**
- Any number of **upgrades (cards that improve or protect a server)**
- Any amount of ICE protecting it

ICE may protect an empty server.

### Runner areas

- **Grip (Runner hand)**
- **Stack (Runner draw pile)**
- **Heap (Runner discard pile)**
- **Rig (Runner’s installed cards)**

The rig contains:

- **Programs (software)**
- **Hardware (equipment)**
- **Resources (contacts, jobs and support)**

Programs use **memory units/MU (program capacity)**. The Runner normally has 4 MU.

## 3. Organizing the table

The exact physical layout is flexible, but it must always be clear:

- Which ICE protects which server
- The order in which the Runner encounters that ICE
- Which upgrades belong to each server
- Which cards are active, hidden, scored or discarded

### Corporation side

Place the three central servers side by side:

```text
        HQ              R&D             Archives
     (hand)         (draw pile)       (discard pile)

   HQ upgrades     R&D upgrades      Archives upgrades
       ICE             ICE               ICE
       ICE             ICE               ICE

                    Runner
```

Each central server is its own column.

- Put upgrades for that server in its **root (attached upgrade area)** beside or immediately behind the server.
- Place ICE in a line extending toward the Runner.
- The ICE nearest the server is the **innermost ICE**.
- The ICE nearest the Runner is the **outermost ICE** and is encountered first.

Create remote servers beside the central servers:

```text
    Remote server A           Remote server B
   agenda/asset/upgrades     agenda/asset/upgrades
           ICE                       ICE
           ICE                       ICE
```

Keep each remote server’s contents together so it is obvious which ICE protects it. Place all face-down cards inside remote servers consistently so their physical position does not reveal whether they are agendas, assets or upgrades.

Also give the Corp separate areas for:

- Identity card
- Credits
- Bad-publicity counters
- Scored agendas
- Removed-from-game cards

### Runner side

```text
 Stack       Identity       Heap
(draw pile)                (discard pile)

 Programs     Hardware     Resources
          Installed rig

 Credits / tags / counters
 Scored agendas
```

The exact arrangement of the **rig (installed Runner cards)** does not matter. Grouping programs, hardware and resources separately makes them easier to find.

Keep track of:

- Total available memory
- Credits
- Tags
- Brain-damage counters
- Counters hosted on individual cards

### Face-up and face-down cards

- Unrezzed Corp cards remain face-down.
- Rezzed Corp cards turn face-up but stay in the same server.
- Corp cards discarded from HQ normally enter Archives face-down.
- Runner cards are installed face-up.
- Scored agendas go into a separate score area and no longer belong to a server.

The table should visually read as:

> Server contents → protecting ICE → Runner

Do not stack different servers’ ICE together. The physical order of ICE is part of the game.

## 4. Setup

Each player:

- Begins with 5 credits.
- Draws 5 cards.
- May take one **mulligan (complete opening-hand redraw)**.
- Must keep the second hand.

The Corp decides whether to redraw first. The Corp also takes the first turn.

For a first game using the original core set, build each starter deck by combining one faction’s cards with all neutral cards for that side. The rulebook recommends Jinteki against Shaper.

## 5. Taking turns

A **click (action)** is the basic unit of work.

### Corp turn

1. Automatically draw one card.
2. Receive 3 clicks.
3. Spend all 3 clicks.
4. Discard down to the maximum hand size, normally 5.

Common Corp actions:

- Draw one card.
- Gain one credit.
- Install a card.
- Play an **operation (one-use Corp card)**.
- Advance an installed card.

### Runner turn

1. Receive 4 clicks.
2. Spend all 4 clicks.
3. Discard down to the maximum hand size, normally 5.

Common Runner actions:

- Draw one card.
- Gain one credit.
- Install a card.
- Play an **event (one-use Runner card)**.
- Make a run.
- Remove a tag.

The Runner does not automatically draw at the beginning of the turn.

### Paying card costs

- The Runner pays a card’s printed install cost when installing a program, hardware or resource.
- The Runner pays an event’s printed play cost when playing it.
- The Corp pays an operation’s printed play cost when playing it.
- Corp agendas, assets, upgrades and ICE normally have no printed install cost. Their costs are paid later through advancing or rezzing, except for the extra cost to install ICE described below.

## 6. Installing and activating Corp cards

Corp cards are normally installed **unrezzed (face-down and inactive)**.

To **rez (activate)** an installed card, the Corp:

- Turns it face-up.
- Pays its printed rez cost.
- Usually does not spend a click.

Agendas are never rezzed. They become active when scored.

Runner cards are installed face-up and become active immediately.

### Installing ICE

ICE can protect any central or remote server.

New ICE:

- Is placed outside all existing ICE protecting that server.
- Costs credits equal to the amount of ICE already protecting that server.

Therefore:

- First ICE: 0-credit installation cost
- Second ICE: 1 credit
- Third ICE: 2 credits
- Fourth ICE: 3 credits

This installation cost is separate from the printed **rez cost (activation price)**.

There is no fixed limit on ICE.

### Installing upgrades

An upgrade may normally be installed in:

- HQ’s root
- R&D’s root
- Archives’ root
- Any remote server

Its theme does not determine its location. A drawing-related upgrade does not automatically belong in R&D. Card text may restrict where it can be installed.

ICE protecting a server also protects its upgrades.

## 7. Advancing and scoring agendas

The Corp advances an installed card by spending:

- 1 click
- 1 credit

This adds one **advancement counter (development marker)**.

When an agenda has enough advancement counters, the Corp may score it:

- Scoring does not cost a click.
- The Corp is not required to score it immediately.
- The Corp may continue advancing it.
- Non-agenda cards may be advanced only if their text allows it.

The Runner does not need to remove advancement counters to steal an agenda. Stealing normally costs nothing, but card effects may impose an additional cost or replace stealing with another effect.

## 8. Making a run

The Runner spends one click and chooses one server.

A run proceeds from the outermost ICE toward the server.

### Approaching ICE

When the Runner approaches ICE:

1. The Runner decides whether to continue.
2. The Corp decides whether to rez that ICE.
3. If it is rezzed, the Runner encounters it.
4. If it remains unrezzed, the Runner passes it.

The Runner cannot **jack out (voluntarily quit)** during the first approach to a piece of ICE during that run.

After completing that first approach—whether the ICE was encountered or passed unrezzed—the Runner may normally jack out during later approach opportunities, including before approaching the next ICE or the server.

### Encountering ICE

Each ICE has **subroutines (effects printed beside arrow-like symbols)**.

The Runner may use an **icebreaker (program that defeats ICE)**.

Normally, the Runner must:

1. Have an icebreaker capable of breaking that ICE type.
2. Increase the icebreaker’s strength until it equals or exceeds the ICE strength.
3. Pay separately for each subroutine they want to break.

Common pairings:

- **Barrier (wall-like ICE)** → **Fracter (barrier breaker)**
- **Code gate (puzzle-like ICE)** → **Decoder (code-gate breaker)**
- **Sentry (attack ICE)** → **Killer (sentry breaker)**

The Runner does **not** have to break every subroutine.

After the Runner finishes breaking subroutines:

- Every unbroken subroutine resolves from top to bottom.
- Some may deal damage, remove credits or cause other effects.
- If a subroutine ends the run, the run ends immediately and later subroutines on that ICE do not resolve.
- Otherwise, the run continues after all remaining subroutines resolve.

Breaking or passing ICE does not destroy it. It remains for later runs.

## 9. Reaching and accessing the server

After passing all ICE:

1. The Runner gets a final chance to jack out.
2. The Corp gets a final opportunity to rez relevant cards.
3. The run becomes **successful**.
4. Successful-run effects occur.
5. The Runner **accesses (examines and interacts with)** cards.

A successful run and accessing are separate events.

An empty-server run can be successful even though there is nothing to access.

### What gets accessed?

#### HQ

The Runner accesses:

- One random card from the Corp’s hand.
- Every upgrade in HQ’s root.

#### R&D

The Runner accesses:

- The top card of the Corp’s draw pile.
- Every upgrade in R&D’s root.

#### Archives

The Runner accesses:

- Every card in the Corp’s discard pile.
- Every upgrade in Archives’ root.

Before individual cards in Archives are accessed, all face-down cards in Archives are turned face-up. The Runner then accesses them in any order.

#### Remote server

The Runner accesses every card installed inside the remote server.

ICE is outside the server and is never accessed.

### What happens to an accessed card?

Resolve one card completely before accessing the next.

- **Agenda:** The Runner must steal it if able. Stealing normally costs nothing, but additional costs or replacement effects may change this.
- **Asset or upgrade:** The Runner may pay its **trash cost (destruction price)** to move it to Archives.
- **Other card:** Examine it and return it unless an effect says otherwise.
- **Card with access instructions:** Follow the printed instructions.

Accessing an unrezzed card does not rez it. A **when accessed** ability can still resolve while the card is unrezzed. If the card is not stolen or trashed, it returns face-down.

When accessing several cards, the Runner normally chooses their order. Multiple R&D cards must be accessed from the top downward. Cards accessed from HQ are kept temporarily separate from HQ until that access sequence is complete, so the same card cannot be randomly accessed twice.

Reaching 7 agenda points wins immediately, even if more cards remained to be accessed.

## 10. What remains after a run?

A run does not normally dismantle a server.

- ICE remains installed.
- Rezzed cards remain rezzed.
- Unrezzed cards remain unrezzed.
- Untrashed assets and upgrades remain installed.
- A stolen agenda leaves the server.

The Corp may later install another agenda or asset behind the same ICE.

---

# Lesson 2 — Play the Same Game with More Detail

Lesson 1 described what happens. This lesson explains the choices hidden inside that sequence.

## 1. Corp servers are flexible

The Corp can create a remote server by installing:

- An agenda
- An asset
- An upgrade
- ICE protecting an otherwise empty server

The Corp may therefore build:

- A heavily defended scoring server
- A cheaply defended economy server
- An empty server intended to waste the Runner’s time
- A trap that appears to be an agenda

Only one agenda or asset may occupy a remote server, but upgrades may be installed alongside it.

When installing into a server, the Corp may first trash cards already installed there. This allows the Corp to replace old assets, agendas or upgrades.

Installed cards cannot normally be rearranged or moved between servers.

## 2. Hidden cards create bluffing

An unrezzed remote card might be:

- An agenda worth stealing
- An asset that produces money
- An upgrade
- A trap that harms the Runner when accessed

Advancement counters do not prove that a card is an agenda. Some assets can also be advanced.

This creates the central Corp question:

> Can I make the Runner spend more attacking this server than the server is worth?

## 3. Rezzing changes the situation during a run

The Corp does not normally pay an ICE’s rez cost until the Runner approaches it.

This means the Runner must consider:

- Does the Corp have enough credits to rez the ICE?
- Is the face-down ICE actually dangerous?
- Will the Corp save its money and let me pass?
- Can I afford the ICE after it appears?

Assets and upgrades can generally be rezzed during permitted timing opportunities. ICE is normally rezzed only when approached.

## 4. Icebreakers require two different payments

Using an icebreaker usually involves:

### Strength payment

Increase the breaker’s strength until it matches the ICE.

This strength boost normally lasts only for that single encounter.

### Breaking payment

Pay separately to break selected subroutines.

Example:

- ICE strength: 4
- Breaker strength: 2
- Breaker says “1 credit: +1 strength”
- Breaker says “1 credit: break one subroutine”
- ICE has two subroutines

The Runner pays:

- 2 credits to reach strength 4.
- Up to 2 more credits to break both subroutines.

The Runner may instead break only the dangerous “end the run” subroutine and accept the other effect.

## 5. Access creates decisions

Access is not simply “look for an agenda.”

The Runner may need to decide:

- Whether an asset is worth its trash cost
- Whether to trash an upgrade or save credits
- Which remote card to access first
- Whether an access-triggered trap can be survived
- Whether spending heavily to reach the server left enough money to trash anything

The Corp can often rez an asset or upgrade before access, but cannot rez an agenda.

## 6. Scoring has its own timing

A fully advanced agenda is not automatically scored.

The Corp may normally score during its own turn:

- In the timing window before the mandatory draw
- After the mandatory draw, before the first action
- After completing an action, before taking the next action or ending the turn

The Corp cannot score during the Runner’s turn or interrupt the middle of another action or ability to score.

Scored agendas may have **“when scored” effects**. Stolen agendas may have **“when stolen” effects**.

## 7. A detailed example run

The Runner attacks a remote server protected by two ICE.

1. The Runner approaches the first piece of ICE for that run and cannot jack out during this first approach.
2. The Corp rezzes it.
3. The Runner increases an icebreaker’s strength.
4. The Runner breaks only its “end the run” subroutine.
5. Another subroutine resolves and removes credits.
6. The Runner passes that ICE.
7. Before approaching the second ICE, the Runner may jack out.
8. The Runner continues.
9. The Corp leaves the second ICE unrezzed.
10. The Runner passes it.
11. The Runner gets one final chance to jack out.
12. The Corp rezzes an upgrade inside the server.
13. The run becomes successful.
14. The Runner accesses the agenda and upgrade in either order.
15. The agenda must be stolen if the Runner can pay any required additional cost and no effect replaces stealing it.
16. The upgrade may be trashed by paying its trash cost.
17. Both ICE remain installed afterward.

---

# Lesson 3 — Card Effects and Offensive Mechanics

## 1. Card abilities

There are three practical kinds of abilities.

### Constant ability (always-on effect)

Works continuously while the card is active.

Example:

> ICE protecting this server has +1 strength.

### Paid ability (pay a cost for an effect)

Written as:

> Cost: effect

Possible costs include:

- Credits
- Clicks
- Hosted counters
- Trashing the card itself

A paid ability may normally be used repeatedly if:

- The full cost can be paid.
- Its restrictions are followed.
- The current timing allows it.

An ability costing a click may only be used as an action during that player’s turn.

### Conditional ability (triggered by an event)

Usually begins with:

- “When…”
- “Whenever…”

If the ability says **“may,”** it is optional.

Without “may,” it is normally required.

## 2. Card text overrides normal rules

When card text directly conflicts with the general rules, the card text wins.

An effect saying something **cannot** happen normally overrides an effect allowing it.

Example:

- Normal rule: The Runner may jack out.
- Card text: “The Runner cannot jack out.”
- The Runner cannot jack out.

## 3. Timing and priority

Paid abilities, rezzing and scoring may occur only at permitted timing opportunities.

As a practical beginner rule:

- Players often receive opportunities before and after actions.
- Additional opportunities occur during specific parts of a run.
- The player whose turn it is acts first.
- Players alternate opportunities until both decline.

You generally cannot interrupt one action with another action.

Prevention abilities are an exception: they are used while the effect they prevent is resolving.

For difficult interactions, use the corrected timing charts in the official FAQ 1.1 for the original core set. They supersede the timing charts in early printings of the 2012 rulebook.

## 4. Traces

A **trace (Corp-versus-Runner credit contest)** attempts to locate or overpower the Runner.

A trace begins with a printed base strength.

1. The Corp openly spends credits to increase the trace strength.
2. The Runner totals their **link (trace defense)** from the identity and active cards, then openly spends credits to increase it further.
3. Compare the totals.

The trace succeeds only if:

> Trace strength is greater than Runner link.

A tie favors the Runner.

The card initiating the trace explains what happens on success or failure.

## 5. Tags

A **tag (Corp tracking marker)** represents the Corp locating the Runner.

If the Runner has at least one tag, the Runner is considered tagged.

While the Runner is tagged, the Corp may spend:

- 1 click
- 2 credits

to trash one installed Runner resource.

The Runner may spend:

- 1 click
- 2 credits

to remove one tag.

Tags remain until an effect removes them. Some cards create additional consequences for being tagged. One tag is enough to enable effects requiring the Runner to be tagged.

## 6. Damage and flatlining

Damage forces the Runner to randomly trash cards from their grip.

### Net damage (digital injury)

Randomly trash one card per damage.

### Meat damage (physical injury)

Randomly trash one card per damage.

Net and meat damage work identically unless a card specifically refers to one type.

### Brain damage (permanent injury)

For each brain damage:

- Randomly trash one card.
- Permanently reduce maximum hand size by one.

The Corp wins by flatlining if:

- The Runner takes more damage than the number of cards in their grip.
- The Runner’s maximum hand size is below zero at the end of the Runner’s turn.

Having zero cards is safe until at least one damage must be suffered.

## 7. Bad publicity

**Bad publicity (temporary run credits for the Runner)** belongs to the Corp.

At the beginning of every run, the Runner receives one temporary credit for each bad-publicity point.

These credits:

- May be spent only during that run
- Can be used like ordinary credits during the run
- Disappear when the run ends
- Return again at the beginning of every later run

## 8. Viruses and purging

Some Runner programs are **viruses (programs using virus counters)**.

Virus counters may:

- Weaken ICE
- Increase card access
- Power card abilities
- Reward repeated runs

The Corp may spend all three clicks to **purge (remove all virus counters)**.

Purging:

- Removes every virus counter in play
- Normally does not trash the virus programs
- Also removes virus counters hosted on non-virus cards

## 9. Exposing cards

To **expose (temporarily reveal)** a card:

1. Reveal the unrezzed installed card to both players.
2. Then return it to its previous face-down state.

Exposing is not accessing.

Therefore:

- An exposed agenda is not stolen.
- An exposed asset cannot automatically be trashed.
- Access-related abilities do not normally trigger.

## 10. Recurring credits

A **recurring credit (restricted reusable credit)** refills at the beginning of its controller’s turn.

It may only be spent in the ways described by the card providing it.

Unused recurring credits do not accumulate beyond the printed amount.

## 11. How card text changes normal play

The following mechanics appear when card text modifies the ordinary run, access or activation rules.

### Additional costs

A card effect may impose an **additional cost** on an action, ability or steal.

- The full additional cost must be paid for that effect to occur.
- If the cost cannot or will not be paid, the action or steal does not occur.
- This is why an accessed agenda is normally mandatory to steal, but may remain un-stolen when the Runner declines to pay an additional stealing cost.

### Access-replacement effects

Some abilities replace normal access with another effect.

- If access is replaced, the Runner does not access the server’s cards unless the replacement effect says otherwise.
- Abilities that trigger from accessing a card do not trigger when no access occurs.
- Only one effect can replace the same access; once one replacement is used, another cannot replace that already-replaced access.

### Bypassing ICE

To **bypass** ICE means to immediately pass it without resolving its subroutines normally.

- A bypass may occur before an encounter begins or after an encounter has already begun, depending on the card effect.
- The ICE’s subroutines do not resolve and are not considered broken.
- Unresolved abilities triggered by encountering that ICE may fail to resolve because the encounter ends.
- The ICE remains installed and keeps its current rezzed or unrezzed state unless another effect changes it.
- Once the Runner has completed the first approach to ICE during the run, they may jack out at later approach opportunities.

### Derezzing cards

To **derez** a rezzed Corp card means to turn it face-down and make it inactive again.

- Derezzing does not refund its rez cost.
- The card remains installed.
- The Corp must pay its rez cost again to rez it later.

---

# Lesson 4 — Rules That Prevent Confusion

## 1. Hosting

To **host (place on another card)** a card or counter means that another card holds it.

- The holding card is the **host (supporting card)**.
- The attached item is **hosted (held by that card)**.

Hosted cards and counters may leave play without affecting the host.

If the host leaves play:

- Every hosted card and counter also leaves play.
- This cannot normally be prevented.

## 2. Unique cards

A card with the diamond symbol before its title is **unique (only one active copy allowed)**.

Only one active copy with that title may exist for that player.

If another copy becomes active, the other active copy is immediately trashed.

The Corp may have multiple unrezzed copies installed because unrezzed cards are inactive.

## 3. Regions and consoles

A **Region (server-wide upgrade subtype)** is a special kind of Corp upgrade.

- Only one Region may be installed in each server.
- Each central-server root is treated separately.

A **console (major Runner hardware subtype)** is special Runner hardware.

- The Runner may have only one console installed at a time.
- The Runner cannot install a second console merely by planning to trash the first; the existing console must leave play before another can be installed.

## 4. Trashing versus discarding

These are different game events.

- **Trash:** A card is destroyed by an effect, cost or access.
- **Discard:** A card is removed from the hand because of hand limits or an instruction using “discard.”

An ability preventing trashing does not automatically prevent discarding.

Corp cards discarded from HQ enter Archives face-down.

## 5. Preventing and avoiding effects

Effects using **prevent** or **avoid** can interrupt the effect they specifically identify.

Example:

> Prevent 1 net damage.

This may be activated while that net damage is being resolved.

It cannot prevent meat damage unless the card says it can.

## 6. Simultaneous effects

If several of one player’s abilities trigger at the same time, that player chooses their order.

If both players have effects resolving simultaneously:

- The player whose turn it is resolves their effects first.
- Then the other player resolves theirs.

Optional effects may sometimes be resolved first in a way that prevents a mandatory effect from still being applicable.

## 7. Forfeiting an agenda

To **forfeit (permanently surrender)** an agenda:

- Choose an agenda in your score area.
- Remove it from the game.
- Lose its agenda points.

The agenda does not enter Archives or the heap.

A player forfeits an agenda only when a card effect requires or permits it.

## 8. Replacing installed Runner programs

At the beginning of a program-installation action, the Runner may trash any number of installed programs.

If the new program would exceed the Runner’s available **memory units/MU (program capacity)**, the Runner must trash enough installed programs before installing it.

If available MU later decreases, the Runner must immediately trash programs until the installed programs fit within the new limit.

Resources and ordinary hardware have no general quantity limit.

## 9. Empty decks and empty hands

- The Corp does not lose merely because R&D is empty.
- The Corp loses when required to draw from empty R&D.
- The Runner does not lose because the stack is empty.
- The Runner does not lose because the grip is empty.
- An empty grip makes any damage immediately lethal.

## 10. Winning immediately

A player wins immediately upon reaching 7 agenda points.

This can interrupt:

- Accessing additional cards
- Resolving the remainder of an access sequence
- Continuing the normal turn

## 11. Minimal deckbuilding rules

For customized decks:

- Use one identity.
- Meet the identity’s minimum deck size.
- Include no more than three copies of a card by title.
- Stay within the identity’s **influence limit (allowance for cards from other factions)**.
- Corp decks must include the required agenda-point range for their deck size.

For a first game, use starter decks assembled from the core set rather than building customized decks: combine one faction with all neutral cards for the same side.

---

# One-Page Mental Model

## Corp

1. Draw automatically.
2. Use 3 clicks.
3. Earn money.
4. Install agendas, assets, upgrades and ICE.
5. Rez defenses when needed.
6. Advance agendas.
7. Score agendas only during permitted Corp-turn timing windows.
8. Bluff about what remote servers contain.

## Runner

1. Use 4 clicks.
2. Earn money and draw cards.
3. Install programs, hardware and resources.
4. Choose a server to attack.
5. Pass ICE by breaking only the subroutines that matter.
6. Decide repeatedly whether continuing is worth the cost.
7. Access the server.
8. Steal agendas and optionally trash assets or upgrades.

## A complete run

> Choose server → receive bad-publicity credits → approach ICE → Corp may rez → encounter or pass ICE → break selected subroutines → resolve the rest unless the run ends → repeat → final chance to quit → successful run → access cards → steal or trash → end run.

## The central strategy

The Corp asks:

> Can I score before the Runner understands or penetrates my defenses?

The Runner asks:

> Can I reach something valuable without spending more than the attack is worth?

That economic and informational contest is the core of Android: Netrunner.

---

## Primary rules sources

Fantasy Flight Games, *Android: Netrunner Core Rules* (2012):  
https://images-cdn.fantasyflightgames.com/ffg_content/android-netrunner/support/android-netrunner-core-rules.pdf

Fantasy Flight Games, *Android: Netrunner FAQ v1.1* (2013 official clarifications and corrected timing structures for the original core set):  
https://www.fantasyflightgames.com/ffg_content/android-netrunner/support/FAQ/2013-February/Netrunner%20LCG%20FAQ%201.1%20Printer%20Friendly.pdf
