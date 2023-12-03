<script lang="ts">
	import { enhance } from "$app/forms";
    import Swal from 'sweetalert2';

    export let form: any;
    export let data: any;


    export function fireSwalSuccess() {
        
        Swal.fire({
            title: 'Success!',
            text: 'ส่งคำขอเรียบร้อย!',
            icon: 'success',
            cancelButtonText: 'OK',
            cancelButtonColor: '#d33',
            showCancelButton: false,
            showCloseButton: true,
            allowOutsideClick: true,
        })
    }

    export function fireSwalError() {
            
            Swal.fire({
                title: 'Error!',
                text: 'เคยส่งคำขอไปแล้ว!',
                icon: 'error',
                cancelButtonText: 'OK',
                cancelButtonColor: '#d33',
                showCancelButton: false,
                showCloseButton: true,
                allowOutsideClick: true,
            })
    }

    $: if (form?.success) {
        console.log(form.studentId);
        fireSwalSuccess();
    }

    $: if (form?.error) {
        fireSwalError();
    }



</script>

<style>
    .full-height {
        min-height: 100vh; /* This will make the div at least the height of the viewport */
        display: flex;
        flex-direction: column;
        justify-content: center; /* This will center the content vertically */
    }


</style>





<div class="bg-white dark:bg-gray-900 full-height">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">อยากให้เพื่อนๆ พี่ๆ น้องๆ ทำอะไร</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">บอกมาได้เลย!!</p>
        <form class="space-y-8" method="POST" use:enhance>
            <div>
                <label for="studentId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">รหัสนักเรียน (เอาไว้กันการส่งซ้ำเฉยๆจ้าา)</label>
                <input id="studentId" name="studentId" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="41234" required>
            </div>
            <!-- <div>
                <label for="songTitle" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Song Title</label>
                <input id="songTitle" name="songTitle" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
            </div>
            <div>
                <label for="songUrl" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Song URL</label>
                <input id="songUrl" name="songUrl" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
            </div> -->
            <div class="sm:col-span-2">
                <label for="notes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">อยากให้ใครทำอะไร</label>
                <textarea id="notes" name="notes" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit Request</button>
        </form>
    </div>
</div>