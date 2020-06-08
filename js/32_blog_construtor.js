function Postagem(titulo, msg, autor){
    this.titulo = titulo,
    this.msg = msg,
    this.autor = autor,
    this.views = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem = new Postagem('Meu Blog', 'Bem Vindo', 'Cíntia Valente')
console.log(postagem)
