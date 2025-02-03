<script lang="ts">
    import bannerVideo from '$lib/videos/bannerVid.webm';
</script>

<section class="hero relative md:h-[75vh] h-[60vh] w-full flex md:items-end items-end">
    <video autoplay muted loop playsinline disablePictureInPicture class="absolute top-0 left-0 w-full h-full object-cover">
        <source src="{bannerVideo}" type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    <div class="absolute inset-0 bg-black bg-opacity-50"></div>

    <div class="container relative z-10 mx-auto md:py-20 md:px-16 py-16 px-16">
        <div class="inline-block bg-black bg-opacity-80 p-4 rounded-lg md:w-1/2">
            <h1 class="md:text-5xl text-3xl font-bold text-white font-heading">Fitness BeeFIT</h1>
            <p class="md:text-xl text-lg mt-4 text-white font-body">
            Vítejte v BeeFit! Od roku 2015 pomáháme dosáhnout fitness cílů v přátelské atmosféře s moderním vybavením, 
            skupinovými lekcemi a certifikovanými trenéry.
            </p>
        </div>
    </div>
</section>  