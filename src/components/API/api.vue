<template>
    <div :class="$style['content']">
        <section>
            <h1>Introduction</h1>
            <div>
                The WOD5E system has an API that modules and macros can use to integrate with the same functions the system itself uses. Though not every specific function is exposed, in particular probably the most useful is the diceroller code as the system uses custom dice and has its own formatting.

                The macro on this page is a great example of that: Though it takes a little bit of constructing and calculations to get what the system needs, you can send a roll to the system's diceroller and get the outcome you need. This can be really powerful for setting up rolls that you use very often, and the roll function itself is extremely powerful too
            </div>
        </section>

<pre><code class="language-javascript">// This macro is an example of how you can access the WOD5E Roll API.

// Define the actor
const actor = game.actors.get(ChatMessage.getSpeaker().actor)

// Make sure we're only allowing vampires to roll this, since it includes hunger dice
if (actor.type !== 'vampire') return ui.notifications.warn('Selected actor is not a vampire.')

// Define any variables we need
const actorHunger = actor.system.hunger.value
const actorAttributes = actor.system.attributes
const actorDisciplines = actor.system.disciplines

// Get the value of any bonuses
const strength = actorAttributes.strength.value
const animalism = actorDisciplines.animalism.value

// Define hunger dice
const advancedDice = Math.max(actorHunger, 0)

// Define vampire dice
// "Basic Dice" is a calculation of what pool we're rolling, minus any "Advanced Dice"
const basicDice = Math.max((strength + animalism) - advancedDice, 0)

// Send the roll to the API
WOD5E.api.Roll({
    title: "Custom Vampire Roll",
    basicDice,
    advancedDice
})
</code></pre>
    </div>
</template>

<style src="./api.css" module></style>
<script src="./api.js"></script>
