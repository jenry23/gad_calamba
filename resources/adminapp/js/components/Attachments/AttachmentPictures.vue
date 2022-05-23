<template>
    <div class="attachment-list-container d-flex flex-wrap flex-gap pt-3" @click.stop>
        <template v-for="file in attachments">
            <div class="pic-align" v-if="!file.wasRecentlyCreated" :key="file.id">
                    <div class="pic-image">
                        <a :href="file.url" target="_blank">
                            <img :src="file.preview_thumbnail" :alt="file.file_name" :title="file.file_name" />
                        </a>
                    </div>
            </div>
        </template>

        <div class="pic-align" v-for="file in tmpAttachments" :key="file.uuid">
                <div class="pic-image">
                    <img
                        :src="file.preview_thumbnail"
                        :alt="file.file_name"
                        :title="file.file_name"
                        :key="file.uuid"
                    />
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AttachmentPictures',
    props: {
        tmpAttachments: {
            type: Array,
            default: function () {
                return []
            }
        },
        attachments: {
            type: Array
        },
        modelId: {
            type: Number,
            default: 0
        }
    },
    methods: {
        checkProgress (attachment) {
            this.tableKey += 1
            return attachment.progress === null ? false : true
        },
        isCanceledOrError (file) {
            return file.status === 'canceled' || file.status === 'error'
        },
        isUploading (file) {
            return (
                file.status === 'canceled' ||
                file.status === 'error' ||
                file.status === 'success'
            )
        },
        removeTmpFile (file) {
            this.$emit('tmp-file-removed', file)
        },
        filesize (bytes, decimals = 1) {
            if (bytes === 0) return '0 Bytes'

            const k = 1000
            const dm = decimals < 0 ? 0 : decimals
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

            const i = Math.floor(Math.log(bytes) / Math.log(k))

            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
        }
    }
}
</script>

<style scoped>
.pic-preview {
    width: 120px;
    position: relative;
}

.pic-image {
    height: 240px;
    width: 174px;
    position: relative;
}

.pic-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.pic-align {
    margin-top: -100px;
    margin-left: 25%;
}
.flex-gap {
    gap: 2em;
}

.file-name {
    font-weight: 500;
    font-size: 13px;
    color: #202124;
    text-overflow: ellipsis;
}

.file-size {
    font-weight: 400;
    color: rgba(0, 0, 0, 0.54);
    font-size: 13px;
}

.vue-dropzone .attachment-list-container * {
    cursor: auto;
}

.vue-dropzone .attachment-list-container {
    cursor: default;
}

.vue-dropzone .pic-preview a img,
.vue-dropzone .pic-preview button.btn,
.vue-dropzone .pic-preview button.btn i {
    cursor: pointer;
}

.file-status {
    font-size: 13px;
    font-weight: 400;
    line-height: 15px;
}

button {
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
}

button .material-icons {
    line-height: 20px;
    font-size: 20px;
}

.progress {
    height: 4px;
    border-radius: 0;
}
</style>
