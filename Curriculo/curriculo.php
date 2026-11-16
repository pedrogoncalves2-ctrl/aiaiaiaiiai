<?php

$nome          = $_POST['nome'] ?? '';
$cidade        = $_POST['cidade'] ?? '';
$telefone      = $_POST['telefone'] ?? '';
$email         = $_POST['email'] ?? '';
$nascimento    = $_POST['nascimento'] ?? '';
$nacionalidade = $_POST['nacionalidade'] ?? '';


$curso              = trim($_POST['cursos'] ?? '');
$status_formacao    = $_POST['status'] ?? '';
$ano_conclusao      = $_POST['ano_conclusao'] ?? '';
$habilidades        = $_POST['habilidades'] ?? [];
$idiomas            = $_POST['idiomas'] ?? [];
$experiencias       = $_POST['experiencia'] ?? [];
$status_experiencia = $_POST['status_experiencia'] ?? [];
$ano_inicio         = $_POST['ano_inicio'] ?? [];
$ano_fim            = $_POST['ano_fim'] ?? [];
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currículo - <?php echo $nome; ?></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1><?php echo $nome; ?></h1>
    <p><strong>Cidade:</strong> <?php echo $cidade; ?></p>
    <p><strong>Telefone:</strong> <?php echo $telefone; ?></p>
    <p><strong>E-mail:</strong> <?php echo $email; ?></p>
    <p><strong>Data de Nascimento:</strong> <?php echo $nascimento; ?></p>
    <p><strong>Nacionalidade:</strong> <?php echo $nacionalidade; ?></p>

    <?php if ($curso !== ''): ?>
        <h2>Formação Acadêmica</h2>
        <ul>
            <li>
                <?php echo $curso; ?>
                <?php if ($status_formacao !== ''): ?>
                    <br>Status: <?php echo $status_formacao; ?>
                <?php endif; ?>
                <?php if ($ano_conclusao !== ''): ?>
                    <br>Ano de conclusão/Ano atual: <?php echo $ano_conclusao; ?>
                <?php endif; ?>
            </li>
        </ul>
    <?php endif; ?>

    <h2>Habilidades</h2>
    <ul>
        <?php foreach ((array)$habilidades as $hab): ?>
            <?php if (trim($hab) !== ''): ?>
                <li><?php echo $hab; ?></li>
            <?php endif; ?>
        <?php endforeach; ?>
    </ul>

    <h2>Experiências Profissionais</h2>
    <ul>
        <?php foreach ((array)$experiencias as $i => $trabalho): ?>
            <?php if (trim($trabalho) !== ''): ?>
                <li>
                    <strong><?php echo $trabalho; ?></strong><br>
                    Status: <?php echo $status_experiencia[$i] ?? 'Não informado'; ?> |
                    Período: <?php echo $ano_inicio[$i] ?? ''; ?> até <?php echo $ano_fim[$i] ?? ''; ?>
                </li>
            <?php endif; ?>
        <?php endforeach; ?>
    </ul>

    <br>
    <a href="javascript:history.back()">← Voltar ao formulário</a>
</body>
</html>