<template>
    <div>
        <div class="header">
        <video autoplay loop class="back-video" muted plays-inline>
            <source src="../assets/video/robot.mp4" type="video/mp4">
        </video>
        </div>
        <div class="nav">
            <a class="nav__link" href="">Home</a>
            <a class="nav__link" href="#about">About</a>
            <a class="nav__link" href="#contact">Contact</a>
            <a class="nav__link" href="https://www.linkedin.com/in/sander-paju-41054915a/">Linkedin</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.html {
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
}

.header {
    height: 93%;
    width: auto;
    position: relative;
}
.back-video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

.nav {
    font-size: 18px;
    position: relative;
    text-align: center;
    text-transform:  uppercase;
}

.nav__link {
    display: inline-block;
    vertical-align: top;
    margin: 0 20px;

    color: #fff;
    text-decoration: none;

    transition: color .1s linear;
}

.nav__link:hover {
    color:  #fce38a;
}

.nav__link:after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    opacity: 0;

    background-color: #fce38a;

    position: relative;
    top: 100%;
    left: 0;
    z-index: 1;

    transition: opacity .1s linear;
}

.nav__link:hover:after {
    opacity: 1;
}
</style>