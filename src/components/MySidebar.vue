<template>
    <div class="sidebar-page">
        <section class="sidebar-layout">
            <b-sidebar 
                fullheight="true"
                position="static"
                :mobile="mobile"
                :expand-on-hover="expandOnHover"
                :reduce="reduce"
                open
            >
                <div class="p-1">
                    <b-menu class="is-custom-mobile">
                        <b-menu-list>
                            <b-menu-item icon-pack="fas" icon="fas fa-home" label="Dashboard"></b-menu-item>
                            <b-menu-item icon-pack="fas" icon="fas fa-users" label="Grupos"><router-link to="/">Grupos</router-link></b-menu-item>
                            <b-menu-item icon-pack="fas" icon="fas fa-user" label="Usuarios"></b-menu-item>
                            <b-menu-item icon-pack="fas" icon="fas fa-cog" label="Sistemas"></b-menu-item>
                            <b-menu-item icon-pack="fas" icon="fas fa-network-wired" label="Categoria"></b-menu-item>
                        </b-menu-list>
                    </b-menu>
                </div>
            </b-sidebar>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return{
            expandOnHover: false,
            mobile: "reduce",
            reduce: false
        };
    },
    name: "MySidebar"
};
</script>

<style lang="scss">
.p-1 {
  padding: 1em;
}
.sidebar-page {
    display: flex;
    flex-direction: column;
    width: 20%;
    min-height: 100%;
    min-height: 120vh;
    background-color: black;
    .sidebar-layout {
        display: flex;
        flex-direction: row;
        min-height: 0%;
        // min-height: 100vh;
    }
}
@media screen and (max-width: 1023px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini-mobile {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 1024px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
.is-mini-expand {
    .menu-list a {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>