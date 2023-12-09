<template>
    <div class="modal modal-overlay" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Detalhes da solicitação</h5>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="mb-1">
                                    <label for="nomeInput" class="form-label">RA:</label>
                                    <input type="text" class="form-control" disabled v-model="modalItem.RA">
                                </div>
                                <div class="mb-1">
                                    <label for="nomeInput" class="form-label">Nome:</label>
                                    <input type="text" class="form-control" disabled v-model="modalItem.Nome">
                                </div>
                                <div class="mb-1">
                                    <label for="nomeInput" class="form-label">Telefone:</label>
                                    <input type="text" class="form-control" disabled v-model="modalItem.Telefone">
                                </div>
                                <div class="mb-1">
                                    <label for="nomeInput" class="form-label">Email:</label>
                                    <input type="text" class="form-control" disabled v-model="modalItem.Email">
                                </div>
                            </div>
                            <div class="col">
                                <div class="mb-1">
                                    <label for="nomeInput" class="form-label">Setor:</label>
                                    <input type="text" class="form-control" disabled v-model="modalItem.Setor">
                                </div>
                                <div class="mb-1">
                                    <label for="nomeInput" class="form-label">Destinatário:</label>
                                    <input type="text" class="form-control" disabled v-model="modalItem.Destinatário">
                                </div>
                                <div class="mb-1">
                                    <label for="nomeInput" class="form-label">Data:</label>
                                    <input type="text" class="form-control" disabled v-model="modalItem.Data">
                                </div>
                            </div>

                            <div class="mb-1">
                                <label for="AreaTexto" class="form-label">Descrição do registro</label>
                                <textarea class="form-control" id="AreaTexto" disabled rows="5"
                                    v-model="modalItem.Registro"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="fecharModal">Fechar</button>
                    <button type="button" class="btn btn-danger" @click="deletarItem">Deletar</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

import { deletaMongo } from '@/components/FunctionMongo';


export default {
    props: {
        modalItem: Object
    },

    data() {
        return {
        }
    },
    methods: {
        fecharModal() {
            this.$emit('fechar');
        },

        deletarItem() {
            const idMongo = this.modalItem._id;
            deletaMongo(idMongo)
                .then(() => {
                    alert("Deletado com sucesso")
                    location.reload()
                })
                .catch((error) => {
                    console.error('Erro ao deletar', error);
                });
        }
    }
};
</script>
  
<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
</style>
  