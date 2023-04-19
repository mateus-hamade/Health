CREATE TABLE Pessoa (
    codigo SERIAL NOT NULL,
    nome VARCHAR(50) NOT NULL,
    CPF VARCHAR(11),
    RG VARCHAR(9),
    telefone VARCHAR(13),
    rua VARCHAR(50),
    bairro VARCHAR(50),
    numero VARCHAR(5),
    CEP VARCHAR(8),
    estado VARCHAR(2) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    pais VARCHAR(50) NOT NULL,
    CONSTRAINT PK_Pessoa PRIMARY KEY (codigo),
    CONSTRAINT UK_Pessoa_CPF UNIQUE (CPF),
    CONSTRAINT UK_Pessoa_RG UNIQUE (RG)
);

CREATE TABLE Funcionario (
    codigo_pessoa INT NOT NULL,
    salario DECIMAL(10, 2) NOT NULL,
    horario_trabalho VARCHAR(5) NOT NULL,
    CONSTRAINT PK_Funcionario PRIMARY KEY (codigo_pessoa),
    CONSTRAINT FK_Funcionario_Pessoa FOREIGN KEY (codigo_pessoa) REFERENCES Pessoa(codigo)
);

CREATE TABLE Paciente (
    codigo_pessoa INT NOT NULL,
    plano_saude VARCHAR(50),
    CONSTRAINT PK_Paciente PRIMARY KEY (codigo_pessoa),
    CONSTRAINT FK_Paciente_Pessoa FOREIGN KEY (codigo_pessoa) REFERENCES Pessoa(codigo)
);

CREATE TABLE Dependente (
    nome VARCHAR(50) NOT NULL,
    codigo_funcionario INT NOT NULL,
    grau_parentesco VARCHAR(50) NOT NULL,
    CONSTRAINT PK_Dependente PRIMARY KEY (nome, codigo_funcionario),
    CONSTRAINT FK_Dependente_Funcionario FOREIGN KEY (codigo_funcionario) REFERENCES Funcionario(codigo_pessoa)
);

CREATE TABLE Auxiliar(
    codigo_funcionario INT NOT NULL,
    grau INT NOT NULL,
    CONSTRAINT PK_Auxiliar PRIMARY KEY (codigo_funcionario),
    CONSTRAINT FK_Auxiliar_Funcionario FOREIGN KEY (codigo_funcionario) REFERENCES Funcionario(codigo_pessoa)
);

CREATE TABLE Medico (
    codigo_funcionario INT NOT NULL,
    CRM VARCHAR(8) NOT NULL,
    especialidade VARCHAR(50) NOT NULL,
    CONSTRAINT PK_Medico PRIMARY KEY (codigo_funcionario),
    CONSTRAINT FK_Medico_Funcionario FOREIGN KEY (codigo_funcionario) REFERENCES Funcionario(codigo_pessoa),
    CONSTRAINT UK_CRM UNIQUE (CRM)
);

CREATE TABLE Enfermeiro (
    codigo_funcionario INT NOT NULL,
    COREN VARCHAR(8) NOT NULL,
    CONSTRAINT PK_Enfermeiro PRIMARY KEY (codigo_funcionario),
    CONSTRAINT FK_Enfermeiro_Funcionario FOREIGN KEY (codigo_funcionario) REFERENCES Funcionario(codigo_pessoa),
    CONSTRAINT UK_COREN UNIQUE (COREN)
);

CREATE TABLE Recepcionista (
    codigo_funcionario INT NOT NULL,
    ramal VARCHAR(10) NOT NULL,
    CONSTRAINT PK_Recepcionista PRIMARY KEY (codigo_funcionario),
    CONSTRAINT FK_Recepcionista_Funcionario FOREIGN KEY (codigo_funcionario) REFERENCES Funcionario(codigo_pessoa)
);

CREATE TABLE Setor (
    codigo SERIAL NOT NULL,
    nome VARCHAR(50) NOT NULL,
    capacidade INT NOT NULL,
    numero INT NOT NULL,
    bloco VARCHAR(1) NOT NULL,
    descricao VARCHAR(1000) NOT NULL,
    CONSTRAINT PK_Setor PRIMARY KEY (codigo),
    CONSTRAINT UK_Setor UNIQUE (nome, numero, bloco)
);

CREATE TABLE Cadastro (
    codigo_recepcionista INT NOT NULL,
    codigo_pessoa INT NOT NULL,
    data_cadastro DATE NOT NULL,
    CONSTRAINT PK_Cadastro PRIMARY KEY (codigo_recepcionista, codigo_pessoa),
    CONSTRAINT FK_Cadastro_Recepcionista FOREIGN KEY (codigo_recepcionista) REFERENCES Recepcionista(codigo_funcionario),
    CONSTRAINT FK_Cadastro_Pessoa FOREIGN KEY (codigo_pessoa) REFERENCES Pessoa(codigo)
);

CREATE TABLE Pertence (
    codigo_setor INT NOT NULL,
    codigo_funcionario INT NOT NULL,
    data_inicial DATE NOT NULL,
    data_final DATE,
    CONSTRAINT PK_Pertence PRIMARY KEY (codigo_setor, codigo_funcionario),
    CONSTRAINT FK_Pertence_Setor FOREIGN KEY (codigo_setor) REFERENCES Setor(codigo),
    CONSTRAINT FK_Pertence_Funcionario FOREIGN KEY (codigo_funcionario) REFERENCES Funcionario(codigo_pessoa)
);

CREATE TABLE Consulta (
    numero_consulta SERIAL NOT NULL,
    codigo_medico INT NOT NULL,
    codigo_paciente INT NOT NULL,
    codigo_setor INT NOT NULL,
    data_consulta DATE NOT NULL,
    data_retorno DATE,
    receita VARCHAR(1000),
    enfermidade VARCHAR(1000),
    CONSTRAINT PK_Consulta PRIMARY KEY (numero_consulta),
    CONSTRAINT FK_Consulta_Medico FOREIGN KEY (codigo_medico) REFERENCES Medico(codigo_funcionario),
    CONSTRAINT FK_Consulta_Paciente FOREIGN KEY (codigo_paciente) REFERENCES Paciente(codigo_pessoa),
    CONSTRAINT FK_Consulta_Setor FOREIGN KEY (codigo_setor) REFERENCES Setor(codigo)
);

CREATE TABLE Auxilia (
    codigo_enfermeiro INT NOT NULL,
    numero_consulta INT NOT NULL,
    CONSTRAINT PK_Auxilia PRIMARY KEY (codigo_enfermeiro, numero_consulta),
    CONSTRAINT FK_Auxilia_Enfermeiro FOREIGN KEY (codigo_enfermeiro) REFERENCES Enfermeiro(codigo_funcionario),
    CONSTRAINT FK_Auxilia_Consulta FOREIGN KEY (numero_consulta) REFERENCES Consulta(numero_consulta)
);