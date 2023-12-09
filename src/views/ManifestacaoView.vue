<template>
    <div class="container">
        <Navbar />
        <br>
        <div>
            <div class="row">
                <div class="col">
                    <h3 class="text-center">Manifestações</h3>
                </div>
                <div class="col col-sm-3">
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar">
                    </form>
                </div>
            </div>
            <br>
            <div v-if="arrayMongo.documents && arrayMongo.documents.length > 0">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tipo de Manifestação</th>
                            <th scope="col">Nome estudante</th>
                            <th scope="col">Setor</th>
                            <th scope="col">Destinatário</th>
                            <th scope="col">Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(arrayMongo, index) in arrayMongo.documents" :key="arrayMongo._id"
                            @click="selecionarItem(arrayMongo)">
                            <td>{{ index + 1 }}</td>
                            <td>{{ arrayMongo.Manifestação }}</td>
                            <td>{{ arrayMongo.Nome }}</td>
                            <td>{{ arrayMongo.Setor }}</td>
                            <td>{{ arrayMongo.Destinatário }}</td>
                            <td>{{ arrayMongo.Data }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <detalhes-modal v-if="mostrarModal" :modalItem="itemSelecionado" @fechar="fecharModal" />
        </div>
    </div>
</template>

<script>

import Navbar from "../components/Navbar.vue"
import DetalhesModal from "../components/DetalhesModal.vue"

import { findMongo } from '@/components/FunctionMongo';

export default {

    components: {
        Navbar,
        DetalhesModal
    },

    data() {
        return {
            arrayMongo: [],
            mostrarModal: false,
            itemSelecionado: null
        }

    },

    mounted() {
        this.procurar();
    },


    methods: {
        selecionarItem(arrayMongo) {
            this.itemSelecionado = arrayMongo;
            this.mostrarModal = true;
        },

        fecharModal() {
            this.mostrarModal = false;
        },

        async procurar() {
            const data = await findMongo();
            this.arrayMongo = data;
            console.log(this.arrayMongo);
        }
    }
}

</script>