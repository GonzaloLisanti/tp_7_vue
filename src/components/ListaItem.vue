<template>
    <div class="card">
      <div class="row no-gutters">
        <div class="col-md-3">
          <router-link :to="`/instrumentos/${instrumento.id}`">
            <img :src="`./img/${instrumento.imagen}`" class="card-img" :alt="instrumento.instrumento" />
          </router-link>
        </div>
        <div class="col-md-9">
          <div class="card-body">
            <h5 class="card-title">
              <router-link :to="`/instrumentos/${instrumento.id}`" class="text-decoration-none text-dark">
                {{ instrumento.instrumento }}
              </router-link>
            </h5>
            <p class="card-text">{{ instrumento.descripcion }}</p>
            <p class="card-text">${{ instrumento.precio }}</p>
          </div>
          <div class="card-footer">
            <router-link :to="`/instrumentos/${instrumento.id}`" class="btn btn-primary float-right">
              Ver Detalles
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ListaItem',
    props: {
      instrumento: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente ListaItem.vue */
  </style>
  