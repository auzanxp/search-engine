<script>
import axios from 'axios';

export default {
    data() {
        return {
            searchTerm: '',
            searchResults: [],
            searchPerformed: false,
        };
    },
    methods: {
        searchCountries() {
            if (this.searchTerm === '') {
                this.searchResults = [];
                return;
            }

            axios
                .get(`https://restcountries.com/v3.1/name/${this.searchTerm}`)
                .then((response) => {
                    this.searchResults = response.data;
                    this.searchPerformed = true;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        performSearch() {
            if (this.searchTerm === '') {
                this.searchResults = [];
                return;
            }

            axios
                .get(`https://restcountries.com/v3.1/name/${this.searchTerm}`)
                .then((response) => {
                    this.searchResults = response.data;
                    this.searchPerformed = true;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        getCountryDetails(country) {
            axios
                .get(`https://restcountries.com/v3.1/name/${country.name.common}`)
                .then((response) => {
                    const countryId = response.data[0].cca2;
                    this.$router.push({ name: 'desc-country', params: { country: countryId } });
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        getCountryLink(country) {
            return {
                name: 'desc-country',
                params: {
                    country: country.cca2,
                },
            };
        },
    },
};
</script>

<template>
    <hi>Hallo hallo</hi>
</template>