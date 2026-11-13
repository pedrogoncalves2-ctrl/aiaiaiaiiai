<?php

$nome          = $_POST['nome'] ?? '';
$cidade        = $_POST['cidade'] ?? '';
$telefone      = $_POST['telefone'] ?? '';
$email         = $_POST['email'] ?? '';
$nascimento    = $_POST['nascimento'] ?? '';
$nacionalidade = $_POST['nacionalidade'] ?? '';


$formacoes          = $_POST['formation'] ?? []; 
$habilidades        = $_POST['habilidades'] ?? [];
$experiencias       = $_POST['experiencia'] ?? [];
$status_experiencia = $_POST['status_experiencia'] ?? [];
$ano_inicio         = $_POST['ano_inicio'] ?? [];
$ano_fim            = $_POST['ano_fim'] ?? [];
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Currículo - <?php echo $nome; ?></title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 700px; margin: 30px auto; line-height: 1.6; color: #333; }
        h1 { border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 10px; }
        h2 { background: #f0f0f0; padding: 6px 10px; margin-top: 25px; font-size: 18px; }
        p { margin: 4px 0; }
    </style>
</head>
<body>

    <h1><?php echo $nome; ?></h1>
    <p><strong>Cidade:</strong> <?php echo $cidade; ?></p>
    <p><strong>Telefone:</strong> <?php echo $telefone; ?></p>
    <p><strong>E-mail:</strong> <?php echo $email; ?></p>
    <p><strong>Data de Nascimento:</strong> <?php echo $nascimento; ?></p>
    <p><strong>Nacionalidade:</strong> <?php echo $nacionalidade; ?></p>

    <?php if (!empty($formacoes)): ?>
        <h2>Formação Acadêmica</h2>
        <ul>
            <?php foreach ((array)$formacoes as $item): ?>
                <?php if ($item !== ''): ?>
                    <li><?php echo $item; ?></li>
                <?php endif; ?>
            <?php endforeach; ?>
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