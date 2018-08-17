<template>
    <div class="sidebar">
        <div class="side-nav">
            <ul>
                <li class="nav-item" v-for="(item, index) in tasks" :key="index">
                    <a href="javascript:void(0)" class="nav-a" @click="jump">{{item.name}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sidebar',
    data() {
        return {
            tasks: [{
                id: '180816',
                name: '2018/08/16'
            }, {
                id: '...',
                name: '...'
            }]
        }
    }, 
    methods: {
        jump() {
            this.$router.push(`/detial/${this.tasks.id}`)
        }
    }
    
}
</script>

<style scoped>
    .sidebar {
        width: 240px;
        position: fixed;
        top: 0;
        bottom: 0;
        margin-top: 80px;
        border-right: 1px solid rgba(178,198,218,.3);
    }

    .sidenav {
        width: 100%;
        height: 100%;
    }
    .side-nav li {
        list-style: none;
    }

    .nav-a {
        display: flex;
        height: 40px;
        align-items: center;
        justify-content: center;
        color: #999999;
        text-decoration: none;
    }

    .nav-a:hover {
        background-color:  rgba(178,198,218,.3); 
    }
</style>


