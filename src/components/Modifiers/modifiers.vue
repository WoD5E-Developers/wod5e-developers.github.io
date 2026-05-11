<template>
    <div :class="$style['content']">
        <section>
            <h1>Situational Modifiers</h1>
            <p>
                Situational modifiers are dynamic bonuses or penalties that apply to rolls when specific conditions are met. These modifiers can come from multiple places on an actor, including items on the actor or the actor type itself. Below is a technical explanation of how modifiers work in the system with examples of how modifiers can be created and used.
            </p>

            <h2>How Modifiers Are Found</h2>
            <p>
                When a roll is made, the roll is comprised of <strong>selectors</strong>. Selectors are paths that describe what is included in the roll or what could apply to the roll. Skills, attributes, disciplines, gifts, edges, and certain roll types (such as a willpower roll) can all be passed as a selector.
            </p>
            <p>
                The system searches for modifiers in two places:
            </p>
            <ul>
                <li>
                    <strong>Items</strong> - Modifiers explicitly granted by items on the actor, including equipment, powers, conditions, and anything else that is an "Item" within Foundry.
                </li>
                <li>
                    <strong>Actor Data Bonuses</strong> - Any modifier stored in a <i>bonuses</i> array anywhere within the actor's system data. This is mainly the case for system-provided modifiers, such as each wereform's bonus or the blood potency effects.
                </li>
            </ul>
            <p>
                A modifier is considered a match if:
            </p>
            <ul>
                <li>One of its provided <i>paths</i> matches a provided selector.</li>
                <li>Its <i>paths</i> includes <i>all</i>, making it universal.</li>
            </ul>

            <h2>Modifier Functionality</h2>
            <p>
                A situational modifier typically contains:
            </p>
            <ul>
                <li><i>value</i> - The numeric bonus or penalty applied.</li>
                <li><i>paths</i> - The selectors this modifier can apply to.</li>
                <li><i>activeWhen</i> - The conditions required for activation.</li>
                <li><i>unless</i> - Conditions that explicitly disable the modifier.</li>
                <li><i>displayWhenInactive</i> - Whether the modifier should still appear even if inactive.</li>
                <li><i>advancedCheckDice</i> - Optional additional dice adjustments.</li>
            </ul>

            <h2>Activation Rules</h2>
            <p>
                Finding a matching modifier does not automatically make it active. Each modifier is evaluated against its activation rules.
            </p>

            <h3>Always Active</h3>
            <p>
                If <i>activeWhen</i> is set to <i>always</i>, the modifier always becomes active.
            </p>

            <h3>isEqual</h3>
            <p>
                The system checks a value on the actor using the set data path. If the path's value matches the expected value, the modifier becomes active.
            </p>
            <p><strong>Example:</strong></p>
            <pre><i>{
  activeWhen: {
    check: 'isEqual',
    path: 'activeForm',
    value: 'crinos'
  }
}</i></pre>
            <p>In the above example, whenever a werewolf's currently active form is "Crinos," the modifier would become active.</p>

            <h3>Selector Match (<i>isPath</i>)</h3>
            <p>
                If the path provided is in the current selectors list, the modifier becomes active.
            </p>
            <p><strong>Example:</strong></p>
            <pre><i>{
  activeWhen: {
    check: 'isPath',
    path: 'attributes.strength'
  }
}</i></pre>
            <p>In the above example, whenever "strength" is included in a roll, the modifier would become active.</p>

            <h3>Blocking with <i>unless</i></h3>
            <p>
                If any selector matches an entry in <i>unless</i>, the modifier is immediately disabled, even if it would otherwise qualify.
            </p>
            <p><strong>Example:</strong></p>
            <pre><i>{
  unless: ['skills.stealth']
}</i></pre>
            <p>
                In this case, the modifier would never apply during stealth tests.
            </p>

            <h3>Display While Inactive</h3>
            <p>
                Some modifiers are meant to remain visible even when they are not currently active. Setting <i>displayWhenInactive</i> allows them to appear in modifier lists without contributing mechanically.
            </p>

            <h2>Total Modifier Calculation</h2>
            <p>
                Once active modifiers are identified:
            </p>
            <ul>
                <li>All active <i>value</i> entries are summed into <i>totalValue</i>.</li>
                <li>Any <i>advancedCheckDice</i> values are summed into <i>totalACDValue</i>.</li>
            </ul>
            <p>
                Only modifiers marked as active contribute to totals.
            </p>
        </section>
    </div>
</template>

<style src="./modifiers.css" module></style>
<script src="./modifiers.js"></script>
