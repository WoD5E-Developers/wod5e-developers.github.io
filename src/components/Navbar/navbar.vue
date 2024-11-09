<template>
    <nav :class="$style['navbar']">
        <router-link :to="links[0].href" :class="$style['image-link']">
            <img :src="navbarimg"/>
        </router-link>
        <ul :class="$style['nav-links']">
            <li v-for="link in links" :key="link.text">
                <router-link :to="link.href">{{ link.text }}</router-link>
            </li>
        </ul>
        <div :class="$style['menu-icon']" @click="toggleMenu">&#9776;</div>
        <div :class="[$style['waffle-menu'], { [$style.show]: isMenuVisible }]" id="waffleMenu">
            <router-link v-for="link in links" :key="link.text" :to="link.href">{{ link.text }}</router-link>
        </div>
    </nav>
</template>

<style src="./navbar.css" module></style>
<script src="./navbar.js"></script>
