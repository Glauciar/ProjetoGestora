<template>
    <div class="row">
        <div class="col-lg-9 mt-3 mx-auto">
            <div class="card mt-2 mx-auto p-4 bg-light">
                <div class="card-body bg-light">
                    <div class="container">
                        <form class="row">
                            <div class="row">
                                <div class="mb-3 col-6">
                                    <p>Tipo de manifestação</p>
                                    <select class="form-select" aria-label="Default select example"
                                        v-model="selectedManifestacao" required>
                                        <option>Elogio</option>
                                        <option>Reclamação</option>
                                        <option>Manifestação</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="mb-3 col-6">
                                    <label for="ra" class="form-label">RA (Matrícula)</label>
                                    <input type="text" class="form-control" id="ra" placeholder="RA:" v-model="ra" required>
                                </div>
                                <div class="mb-3 col-6">
                                    <label for="nome" class="form-label">Nome </label>
                                    <input type="text" class="form-control" id="nome" placeholder="Nome:" v-model="nome"
                                        required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="mb-3 col-6">
                                    <label for="AlunoTelefone" class="form-label">Telefone</label>
                                    <input type="tel" class="form-control" id="AlunoTelefone" placeholder="Telefone:"
                                        v-model="telefone" required>
                                </div>
                                <div class="mb-3 col-6">
                                    <label for="AlunoEmail" class="form-label">Email </label>
                                    <input type="text" class="form-control" id="AlunoEmail" placeholder="Email:"
                                        v-model="email" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="mb-3 col-6">
                                    <p>Selecione o setor</p>
                                    <select class="form-select" aria-label="Default select example" v-model="selectedSetor"
                                        required>
                                        <option>TI</option>
                                        <option>Biologia</option>
                                        <option>Medicina</option>
                                    </select>
                                </div>
                                <div class="mb-3 col-6">
                                    <p>Selecione o destinatário</p>
                                    <select class="form-select" aria-label="Default select example"
                                        v-model="selectedDestinatario" required>
                                        <option>Vinícius</option>
                                        <option>Glaucia</option>
                                        <option>Gabriel</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="AreaTexto" class="form-label">Descrição do
                                    registro</label>
                                <textarea class="form-control" id="AreaTexto" rows="5" v-model="registro"
                                    required></textarea>
                            </div>
                            <button class="btn btn-primary btn-lg btn-block" @click="enviar2">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { enviarMongo } from '@/components/FunctionMongo';

export default {
    name: "FormRegistro",

    data() {
        return {
            selectedManifestacao: "",
            ra: "",
            nome: "",
            telefone: "",
            email: "",
            selectedSetor: "",
            selectedDestinatario: "",
            registro: ""
        }
    },

    methods: {
        enviar2() {
            if (
                !this.selectedManifestacao ||
                !this.ra ||
                !this.nome ||
                !this.telefone ||
                !this.email ||
                !this.selectedSetor ||
                !this.selectedDestinatario ||
                !this.registro
            ) {
                alert("Por favor, preencha todos os campos antes de enviar.")
                return;
            }

            const manifestacao = this.selectedManifestacao
            const ra = this.ra
            const nome = this.nome
            const telefone = this.telefone
            const email = this.email
            const setor = this.selectedSetor
            const destinatario = this.selectedDestinatario
            const registro = this.registro

            enviarMongo(manifestacao, ra, nome, telefone, email, setor, destinatario, registro)
            alert("Registrado com sucesso!")
            this.limparCampos()
        },

        limparCampos() {
            this.selectedManifestacao = "";
            this.ra = "";
            this.nome = "";
            this.telefone = "";
            this.email = "";
            this.selectedSetor = "";
            this.selectedDestinatario = "";
            this.registro = "";
        },
    }
}

</script>