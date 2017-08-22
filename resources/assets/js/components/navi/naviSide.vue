<style lang="scss">
@import "../../../sass/_variables.scss";

.navi-content {
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;

    a {
        color: $pastel-coal !important;
    }


    .navi-lang {
        width: 100%;
        align-self: flex-start;
        font-size: .8em;
        margin-bottom: 20px;
    }
    .navi-links {
        width: 100%;
        align-self: center;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.2em;
        margin-bottom: 10px;

        .navi-brand {
            img {
                width: 80px;
                border-radius: 50%;
            }
            margin-bottom: 20px;
        }

    }
    .navi-footer {
        width: 100%;
        align-self: flex-end;
        text-transform: uppercase;
        font-weight: 500;
        font-size: .8em;
        line-height: 1em;
        margin-bottom: 5px;
    

    }
        .navi-copy {
            font-weight: 100;
            padding-top: 10px;    
        }
}


</style>
<template>

<div class="navi-content text-center link-hover-pink link-unstyled">
    <div class="navi-lang">
        <ul class="list-inline">
            <li><a href="/" style="border-right: 1px solid; padding-right: 15px;">English</a></li>
            <li><a href="/">Sign In</a></li>
        </ul>
    </div>

    <div class="navi-links">
        <div class="navi-brand">
            <img src="/images/bears.jpg">
        </div>
        <ul class="list-unstyled">
            <li><a href="">Portal</a></li>
            <li><a href="">Missions</a></li>
            <li><a href="">Videos</a></li>
            <li><a href="">Merchandise</a></li>
        </ul>
    </div>
    <div class="navi-footer">
        <ul class="list-inline">
            <li><a href="">Our Story</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Career</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Terms</a></li>
        </ul>
        <p class="navi-copy">&copy; Company 2017</p>
    </div>
</div>

</template>

<script>
    export default {

    };
</script>
