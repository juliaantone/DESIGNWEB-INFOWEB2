<script setup>
    import { useNoticiasStore } from '@/stores/useNoticiasStore';
    import {ref} from 'vue';
    const noticiasStore = useNoticiasStore()

    const titulo = ref('')
    const texto = ref('')

    function adicionarNoticiaView(){
        noticiasStore.adicionarNoticia({
            titulo: titulo.value,
            texto: texto.value
        })
        texto.value = ''
        titulo.value = ''
    }
</script>

<template>
    <h2>NOTÍCIAS</h2>

    <form @submit.prevent="adicionarNoticiaView">
        <label>TÍTULO <input v-model="titulo"></label>
        <label>TEXTO <input v-model="texto"></label>
        <button type="submit">ADICIONAR</button>
    </form>

    <div v-for="noticia in noticiasStore.noticias" :key="noticia.id">
        <h3>{{noticia.titulo }}</h3>
        <p> {{noticia.texto}}</p>
        <button @click="noticiasStore.removerNoticia(noticia.id)">Remover</button>
        <button @click="noticiasStore.favoritarNoticia(noticia.id)">
            {{ noticia.favorito ? '❤️' : '🤍' }}
        </button>
    </div>
</template>