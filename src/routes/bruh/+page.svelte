<script lang="ts">
	import type { PageData } from "../$types";

    export let data: PageData;

    let requests = data.allData;

</script>
<style>
    body {
      margin: 0;
      padding: 0;
      font-family: "Prompt", sans-serif;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 16pt;
    }

    th, td {
      border: 1px solid #000;
      padding: 8px;
      text-align: left;
    }

    @media print {
      body {
        width: 210mm;
        height: 297mm;
      }
    }
  </style>

<table>

    {#each requests as request}
    <tr>
      <td>{request.requestText}</td>
    </tr>
    {/each}
    <!-- Add more sentences as needed -->
</table>

<!-- <div class="">
    <div class="">
        <div class="overflow-x-auto">
            <table class="">
                <thead class="">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            No.
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Request Text
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {#each requests as request, i}
                    <tr>

                        <th scope="row" class="font-medium">
                            {i + 1}
                        </th>
                        <td class="">
                            {request.requestText}
                        </td>
                        <td class="px-6 py-4">
                            <div class="overflow-hidden whitespace-nowrap overflow-x-auto">
                                {request.songUrl}
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            {request.approveStatus}
                        </td>

                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div> -->