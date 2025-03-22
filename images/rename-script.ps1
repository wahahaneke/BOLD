# PowerShell重命名脚本
$files = Get-ChildItem -Path . -Filter "*.png" | Sort-Object LastWriteTime
$i = 1

foreach ($file in $files) {
    if ($file.Name -like "*.png") {
        $newName = "$i.png"
        Write-Host "重命名: $($file.Name) -> $newName"
        Rename-Item -Path $file.FullName -NewName $newName
        $i++
    }
}

Write-Host "重命名完成！" 