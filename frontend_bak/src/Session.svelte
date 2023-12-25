<script>
    import {main} from "../wailsjs/go/models"
    import {GetSession, SetSession, DeleteSession} from "../wailsjs/go/main/Session"

    let session = {
        name: "",
        roll_num: ""
    }

    GetSession().then(result => {
        session.name = result.name
        session.roll_num = result.roll_num
    })

    function setSession() {
        SetSession(session.name, session.roll_num).then(_ => alert("successful"), _ => alert("failed with error"))
    }

    function deleteSession() {
        DeleteSession().then(_ => {
            session.name = ""
            session.roll_num = ""
        }, _ => {
            alert("delete failed")
        })
    }
</script>

<div class="flex flex-row justify-center bg-slate-200 place-items-center">
    <form>
        <div class="my-3">
            <label for="rollNum">Roll Number:</label>
            <input type="text" id="rollNum" name="rollNum" bind:value={session.roll_num}>
        </div>
        <div class="my-3">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" bind:value={session.name}>
        </div>
        <div>
            <input class="p-2 bg-blue-400" type="button" value="Login" on:click={setSession}>
            <input class="p-2 bg-red-400" type="button" value="Logout" on:click={deleteSession}>
        </div>
    </form>
</div>
