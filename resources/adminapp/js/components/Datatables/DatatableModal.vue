<template>
    <div>
        <div v-if="row.status === 'Failed'">
        <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
            View Error
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true"
            >
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header" style="background-color: #8B0000;color:white">
                    <h5 class="modal-title" id="exampleModalLongTitle">View Error</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                        Error Message
                    <div class="card">
                        <div class="card-body">
                            <b>{{ JSON.parse(row[field]) }}</b>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div v-else-if="row.status === 'Processing'">
            <span
                class="badge badge-pill badge-orange"
            >
            Processing
            </span>
        </div>
        <div v-else>
            <span
                class="badge badge-pill badge-green"
            >
            <b>{{ row[field] }}</b>
            </span>
        </div>
    </div>
  </template>

  <script>
  export default {
    props: ['field', 'row']
  }
  </script>
