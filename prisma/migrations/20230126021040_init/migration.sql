-- CreateTable
CREATE TABLE `Cursos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(100) NOT NULL,
    `imagen` VARCHAR(191) NULL,
    `codigo` VARCHAR(191) NOT NULL,
    `estado` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Cursos_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Departamentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `departamento` VARCHAR(150) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Provincias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `provincia` VARCHAR(191) NOT NULL,
    `departamentoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Distritos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `distrito` VARCHAR(191) NOT NULL,
    `provinciaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Servicios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `servicio` VARCHAR(191) NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,
    `orden` INTEGER NOT NULL,
    `estado` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServicioCursos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `provinciaId` INTEGER NOT NULL,
    `servicioId` INTEGER NOT NULL,
    `cursoId` INTEGER NOT NULL,
    `orden` INTEGER NOT NULL,
    `estado` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Silabus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sevicioCursoId` INTEGER NOT NULL,
    `capitulo` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `orden` INTEGER NOT NULL,
    `estado` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Provincias` ADD CONSTRAINT `Provincias_departamentoId_fkey` FOREIGN KEY (`departamentoId`) REFERENCES `Departamentos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Distritos` ADD CONSTRAINT `Distritos_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServicioCursos` ADD CONSTRAINT `ServicioCursos_servicioId_fkey` FOREIGN KEY (`servicioId`) REFERENCES `Servicios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServicioCursos` ADD CONSTRAINT `ServicioCursos_cursoId_fkey` FOREIGN KEY (`cursoId`) REFERENCES `Cursos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Silabus` ADD CONSTRAINT `Silabus_sevicioCursoId_fkey` FOREIGN KEY (`sevicioCursoId`) REFERENCES `ServicioCursos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
