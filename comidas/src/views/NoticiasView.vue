<template>
  <main class="noticias">
    <h2>Promoções</h2>

    <p v-if="noticias.length === 0">
      Nenhuma promoção cadastrada.
    </p>

    <ul v-else>
      <li v-for="item in noticias" :key="item.id">
        <strong>{{ item.titulo }}</strong>
        <p>{{ item.texto }}</p>
        <button @click="excluirNoticia(item.id)">
          Excluir
        </button>
      </li>
    </ul>
  </main>
</template>

<script setup>
import { ref, watch } from 'vue'

const chaveStorage = 'delicias_noticias'

const noticiasIniciais = [
  {
    id: 1,
    titulo: 'Promoção',
    texto: 'Hambúrguer Artesanal por apenas R$ 24,99'
  },
  {
    id: 2,
    titulo: 'Promoção',
    texto: 'Pizza de Calabresa por apenas R$ 39,99'
  },
  {
    id: 3,
    titulo: 'Promoção',
    texto: 'Açaí com acompanhamento por apenas R$ 11,99'
  },
  {
    id: 4,
    titulo: 'Promoção',
    texto: 'Batata Frita por apenas R$ 9,99'
  }
]

function carregarNoticias() {
  try {
    const dados = localStorage.getItem(chaveStorage)
    if (dados !== null) {
      const lista = JSON.parse(dados)
      if (Array.isArray(lista)) {
        return lista
      }
    }
  } catch (erro) {
    console.error('Erro ao carregar promoções:', erro)
  }

  return noticiasIniciais
}
const noticias = ref(carregarNoticias())
const novoTitulo = ref('')
const novoTexto = ref('')

// Salva a lista sempre que ela for alterada.
watch(
  noticias,
  (novaLista) => {
    try {
      localStorage.setItem(
        chaveStorage,
        JSON.stringify(novaLista)
      )
    } catch (erro) {
      console.error('Erro ao salvar promoções:', erro)
    }
  },
  { deep: true, immediate: true }
)

function adicionarNoticia() {
  const titulo = novoTitulo.value.trim()
  const texto = novoTexto.value.trim()

  if (!titulo || !texto) return

  noticias.value.push({
    id: Date.now(),
    titulo,
    texto
  })

  novoTitulo.value = ''
  novoTexto.value = ''
}

function excluirNoticia(id) {
  noticias.value = noticias.value.filter(
    (item) => item.id !== id
  )
}
</script>

