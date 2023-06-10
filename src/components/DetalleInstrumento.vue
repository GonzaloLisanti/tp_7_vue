<template>
  <div v-if="instrumento" class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 text-center">
        <h1>{{ instrumento.instrumento }}</h1>
        <img
          :src="`/img/${instrumento.imagen}`"
          :alt="instrumento.instrumento"
          class="img-fluid mb-4"
        />
        <p>{{ instrumento.descripcion }}</p>
        <p>Precio: {{ instrumento.precio }}</p>
        <p>
          Costo de envío:
          {{
            instrumento.costoEnvio === "G"
              ? "Envío gratis"
              : `$${instrumento.costoEnvio}`
          }}
        </p>
        <p>Cantidad vendida: {{ instrumento.cantidadVendida }}</p>
        <router-link to="/productos" class="btn btn-primary btn-lg"
          >Volver a la lista</router-link
        >
      </div>
    </div>
  </div>
  <div v-else>Cargando...</div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "DetalleInstrumento",
  setup() {
    const instrumento = ref(null);
    const router = useRouter();
    const route = useRoute();
    const id = route.params.id;

    onMounted(() => {
      fetch("http://localhost:8080/api/instrumentos/${id}")
        .then((response) => response.json())
        .then((data) => {
          const instrumentoData = data.instrumentos.find((i) => i.id === id);
          instrumento.value = instrumentoData;
        })
        .catch((error) => console.error(error));
    });

    return {
      instrumento,
    };
  },
};
</script>
