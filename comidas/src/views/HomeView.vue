<template>
    <main>
        <article>
            <h2>Bem-vindo ao Delícias!</h2>
            <p>Aqui você encontra comidas deliciosas preparadas com carinho</p>
            <p>Nosso cardápio oferece opções para diferentes gostos e momentos.</p>
            <p>Venha conhecer nossas opções e escolhasua comida favorita!</p>

            <router-link to="/comidas">Ver nosso cardápio</router-link>
        </article>
    </main>
</template>

<script>
export default {
    name: 'HomeView'
}
</script>