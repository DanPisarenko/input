export default {
    render() {
        return `
            ${this.css()}
            ${this.html()}
        `
    },
    html() {
        return `
        <form action="submit">
                <input class="dd1" type="email" name="email">
                <label class="ddd">Email</label>
<br>                <input class="dd2" type="password" name="password">
                <label class="ddf">Password</label>
            <br>

            <button>button</button>    
        </form>
        `
    },
    css() {
        return `
            <style>
                form {
                    border: 2px dotted;
                    width: 480px;
                    height: 320px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                
                input {
                    width: 350px;
                    height: 40px;
                    background-color: #fff;
                    border-radius: 8px;
                }
                
                button {
                    width: 100px;
                    height: 40px;
                    border: 1px solid green;
                    background-color: #fff;
                    border-radius: 8px;
                    text-align: center;
                    font-size: 15px;
                    cursor: pointer;
                }

                .ddd {
                    font-size: 14pt;
                    position: relative;
                    right: 26%;
                    bottom: 10.5%;
                    color: #888;
                    transition: 0.3s;
                }
                .dd1:focus ~ .ddd {
                    position: realative;
                    font-size: 14pt;
                    bottom: 17.5%;
                    right: 19%;
                }
                .ddf {
                    font-size: 14pt;
                    position: relative;
                    right: 22%;
                    bottom: 10.5%;
                    color: #888;
                    transition: 0.3s;
                }
                .dd2:focus ~ .ddf {
                    position: realative;
                    font-size: 14pt;
                    bottom: 17.5%;
                    right: 16%;
                }

                label{
                    background-color: #fff;
                    padding-left: 5px;
                    padding-right: 5px;
                }
                .dd1{
                    border: 1px solid lightgrey;
                }
                .dd2{
                    border: 1px solid lightgrey;
                }


            </style>
        `
    }
}