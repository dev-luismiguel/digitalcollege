const usuarios = [
    { id: 1, nome: "Juliana Moraes", email: "juliana.moraes@example.com", ativo: true },
    { id: 2, nome: "Marta Rocha", email: "marta.rocha@example.com", ativo: true },
    { id: 3, nome: "Pedro Gomes", email: "pedro.gomes@example.com", ativo: false },
    { id: 4, nome: "Ana Silva", email: "ana.silva@example.com", ativo: true },
    { id: 5, nome: "Carlos Souza", email: "carlos.souza@example.com", ativo: false },
];

// Retorne todos os usuários que são ativos.
// function getActiveUsers() {
//     const usuariosFiltrados = usuarios.filter((usuario) => usuario.ativo);
//     return usuariosFiltrados;

//     // Mesma coisa
//     return usuarios.filter((usuario) => { 
//         return usuario.ativo
//     })
// }

// console.log(getActiveUsers())

// Retorne um novo array contendo apenas nome e email.
function getUsersNameAndEmail() {
    return usuarios.map((usuario) => ({ 
            nome: usuario.nome,
            email: usuario.email,
        })
    )

    // Mesma coisa
    return usuarios.map(({ nome, email }) => ({ nome, email }))
}

usuarios.map(({ nome, email, ...attrs }) => ({ nome, email, test: attrs.ativo }))

// Ordene o array em ordem alfabética pelo nome.
function getSortedUsers() {
    const usersSorted = usuarios.sort((a, b) => {
        if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
            return -1
        } else if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
            return 1
        }
        return 0
    })

    return usersSorted
}

console.log(getSortedUsers())

// Ordene o array em ativos primeiros e inativos depois.
function getSortedActivesUsers() {
    return usuarios.sort((a) => a.ativo ? -1 : 1)
}

// Remova um usuário por ID
function removeUserById(id) {
    const usuariosCopy = [...usuarios]

    const userIndexToRemove = usuariosCopy.findIndex((usuario) => usuario.id === id);
    usuariosCopy.splice(userIndexToRemove, 1);

    return usuariosCopy;
}

console.log(removeUserById(2))

const alunos2 = [
    {
        nome: "João",
        turma: "1A",
        media: 5,
    }
]

const alunos = [
    {
        nome: "João",
        notas: [
            { 
                materia: "Matemática",
                nota: 5
            },
            { 
                materia: "Português",
                nota: 6
            },
            { 
                materia: "Química",
                nota: 7
            }
        ],
        turma: "1A"
    },
    {
        nome: "Maria",
        notas: [
            { 
                materia: "Matemática",
                nota: 9
            },
            { 
                materia: "Português",
                nota: 8
            },
            { 
                materia: "Química",
                nota: 7
            }
        ],
        turma: "1A"
    },
    {
        nome: "José",
        notas: [
            { 
                materia: "Matemática",
                nota: 3
            },
            { 
                materia: "Português",
                nota: 2
            },
            { 
                materia: "Química",
                nota: 3
            }
        ],
        turma: "1B"
    },
    {
        nome: "Ana",
        notas: [
            { 
                materia: "Matemática",
                nota: 6
            },
            { 
                materia: "Português",
                nota: 5
            },
            { 
                materia: "Química",
                nota: 4
            }
        ],
        turma: "1B"
    }
]

// Faça uma função que recebe um aluno como argumento e retorna um novo objeto com nome, turma e média do aluno

function getStudentAverage(student) {
    const notes = student.notas
    const notesSum = notes.reduce((acc, note) => acc + note.nota, 0)
    const average = notesSum / notes.length

    return {
        nome: student.nome,
        turma: student.turma,
        media: average,
    }
}

console.log(getStudentAverage(alunos[0]))

// Retorne um novo array com nome, turma e média de todos os alunos.
function getStudentsAverage() {
    return alunos.map(getStudentAverage);
}

console.log(getStudentsAverage())

// Retorne um novo array com média por turma.
/*
[
    {
        turma: 1A,
        media: X,
    },
    {
        turma: 1B,
        media: Y,
    }
]
*/
function getAverageByClass() {
    const stutendsAverage = getStudentsAverage()
    return stutendsAverage.reduce((acc, student) => {
        if (acc.findIndex((el) => el.turma === student.turma) == -1) {
            const studendsAverageFiltered = stutendsAverage.filter((studentAverage) => studentAverage.turma === student.turma)

            acc.push(
                {
                    turma: student.turma,
                    media: studendsAverageFiltered.reduce((acc2, student) => acc2 + student.media, 0) / studendsAverageFiltered.length
                }
            )
        }
        return acc;
    }, [])
}

console.log(getAverageByClass())