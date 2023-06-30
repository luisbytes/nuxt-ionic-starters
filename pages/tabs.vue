<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="tab1" href="/tabs/tab1">
                    <ion-icon aria-hidden="true" :icon="ioniconsTriangle" />
                    <ion-label>Tab 1</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="tab2" href="/tabs/tab2">
                    <ion-icon aria-hidden="true" :icon="ioniconsEllipse" />
                    <ion-label>Tab 2</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="tab3" href="/tabs/tab3">
                    <ion-icon aria-hidden="true" :icon="ioniconsSquare" />
                    <ion-label>Tab 3</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script setup lang="ts">
definePageMeta({
    redirect: '/tabs/tab1'
})
</script>