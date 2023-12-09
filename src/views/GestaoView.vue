<template>
    <div class="container">
        <br>
        <div>
            <img class="rounded mx-auto d-block img-fluid" v-bind:src="UnisalesLogo" />
            <br>
        </div>
        <div>
            <h1 class="text-center">Painel de controle ouvidoria</h1>
            <br>
            <div class="LinhaVermelha"></div>
            <br>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <div class="card border-info mb-3">
                    <div class="card-body">
                        <RouterLink to="/registro"><img class="img-thumbnail" v-bind:src="NovoUsuario"/><br><br></RouterLink>
                        <h4 class="text-center text-light">Novo Registro</h4>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card border-info mb-3">
                    <div class="card-body">
                        <RouterLink to="/manifestacao"><img class="img-thumbnail" v-bind:src="imgManifestacao"/><br><br></RouterLink>
                        <h4 class="text-center text-light">Tratar manifestações</h4>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card border-info mb-3">
                    <div class="card-body">
                        <img class="img-thumbnail" v-bind:src="imgPesquisa"/>
                        <h4 class="text-center text-light">Gerar pesquisa de satisfação</h4>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card border-info mb-3">
                    <div class="card-body">
                        <RouterLink to="/dashboard"><img class="img-thumbnail" v-bind:src="imgDashboard"/><br><br></RouterLink>
                        <h4 class="text-center text-light">Gerar dashboard</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            UnisalesLogo: require("../assets/logo.svg"),
            NovoUsuario: require("../assets/NovoUsuario.png"),
            imgManifestacao: require("../assets/imgManifestacao.png"),
            imgDashboard: require("../assets/imgDashboard.png"),
            imgPesquisa: require("../assets/imgPesquisa.png")
        }
    },
}
</script>
  
<style>
body {
    background-color: whitesmoke
}

.card {
    background-color: #2284CB;
}

.LinhaVermelha {
    background-color: red;
    height: 3px;
}
</style>