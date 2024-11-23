<template>
    <div :class="$style['content']">
        <section>
            <h1>Introduction: Simple Roll API</h1>
            <div>
                The WOD5E system has an API that modules and macros can use to integrate with the same functions the system itself uses. Though not every specific function is exposed, in particular probably the most useful is the diceroller code as the system uses custom dice and has its own formatting.

                The macro on this page is a great example of that: Though it takes a little bit of constructing and calculations to get what the system needs, you can send a roll to the system's diceroller and get the outcome you need. This can be really nice for setting up rolls that you use very often, and the roll function itself is extremely powerful too, letting you do things like pre-set a difficulty, trigger other macros after the result is processed, modify things like whether hunger/rage dice effects are processed, and so on!

                Below, you'll find documentation about the current variables the roll function can accept.

<pre class="language-javascript"><code class="language-javascript">
* basicDice                 (Optional, default 0) The number of 'basic' dice to roll, such as vampire, werewolf, and hunter dice
* advancedDice              (Optional, default 0) The number of 'advanced' dice to roll, such as hunger, rage and desperation dice
* actor                     The actor that the roll is coming from
* data                      Actor or item data to pass along with the roll
* title                     Title of the roll for the dialog/chat message
* disableBasicDice          (Optional, default false) Whether to disable basic dice on this roll
* disableAdvancedDice       (Optional, default false) Whether to disable advanced dice on this roll
* willpowerDamage           (Optional, default 0) How much to damage willpower after the roll is complete
* increaseHunger            (Optional, default false) Whether to increase hunger on failures
* decreaseRage              (Optional, default false) Whether to reduce rage on failures
* difficulty                (Optional, default 0) The number that the roll must succeed to count as a success
* flavor                    (Optional, default '') Text that appears in the description of the roll
* callback                  (Optional) A callable function for determining the chat message flavor given parts and data
* quickRoll                 (Optional, default false) Whether the roll was called to bypass the roll dialog or not
* rollMode                  (Optional, default FVTT's current roll mode) Which roll mode the message should default as
* rerollHunger              (Optional, default false) Whether to reroll failed hunger dice
* selectors                 (Optional, default []) Any selectors to use when compiling situational modifiers
* macro                     (Optional, default '') A macro to run after the roll has been made
* disableMessageOutput      (optional, default false) Whether to display the message output of a roll
* advancedCheckDice         (optional, default 0) Any dice that, part of an 'advanced' diceset, is rolled separately but at the same time
</code></pre>
            </div>
        </section>
        <section>
            <div class="collapsible-container">
            <div class="collapsible-header" @click="toggleCollapse" ref="rollApiExample">
                WOD5E.api.Roll Example
            </div>
            <div class="collapsible-content" ref="rollApiExample">
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
            </div>
        </section>
    </div>
</template>

<style src="./api.css" module></style>
<script src="./api.js"></script>
